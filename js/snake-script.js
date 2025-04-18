document.addEventListener('DOMContentLoaded', () => {
    // Get canvas and context
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions based on its display size
    function setCanvasDimensions() {
        const displayWidth = canvas.clientWidth;
        const displayHeight = canvas.clientHeight;
        
        // Set canvas dimensions to match display size
        canvas.width = displayWidth;
        canvas.height = displayHeight;
    }
    
    // Call initially and on window resize
    setCanvasDimensions();
    window.addEventListener('resize', () => {
        setCanvasDimensions();
        // Adjust grid size when canvas is resized
        gridSize = Math.floor(canvas.width / 25);
        // Ensure snake and food positions are updated with new grid size
        if (snake.length > 0) {
            snake = snake.map(segment => ({
                x: Math.floor(segment.x / prevGridSize) * gridSize,
                y: Math.floor(segment.y / prevGridSize) * gridSize
            }));
            food = {
                x: Math.floor(food.x / prevGridSize) * gridSize,
                y: Math.floor(food.y / prevGridSize) * gridSize
            };
            prevGridSize = gridSize;
        }
    });
    
    // Game variables
    let gridSize = Math.floor(canvas.width / 25); // Dynamically calculate grid size
    let prevGridSize = gridSize; // Track previous grid size for resizing
    let snake = [];
    let food = {};
    let direction = 'right';
    let nextDirection = 'right';
    let score = 0;
    let highScore = localStorage.getItem('snakeHighScore') || 0;
    let gameSpeed = 150; // milliseconds
    let gameLoop;
    let gameActive = false;
    
    // DOM elements
    const scoreElement = document.getElementById('score');
    const highScoreElement = document.getElementById('highScore');
    const finalScoreElement = document.getElementById('finalScore');
    const gameOverModal = document.getElementById('gameOverModal');
    const restartBtn = document.getElementById('restartBtn');
    
    // Mobile control buttons
    const upBtn = document.getElementById('upBtn');
    const leftBtn = document.getElementById('leftBtn');
    const rightBtn = document.getElementById('rightBtn');
    const downBtn = document.getElementById('downBtn');
    
    // Initialize game
    function initGame() {
        // Reset game state
        snake = [
            { x: 5 * gridSize, y: 10 * gridSize },
            { x: 4 * gridSize, y: 10 * gridSize },
            { x: 3 * gridSize, y: 10 * gridSize }
        ];
        generateFood();
        direction = 'right';
        nextDirection = 'right';
        score = 0;
        scoreElement.textContent = score;
        highScoreElement.textContent = highScore;
        gameActive = true;
        
        // Clear previous game loop if exists
        if (gameLoop) clearInterval(gameLoop);
        
        // Start game loop
        gameLoop = setInterval(gameStep, gameSpeed);
    }
    
    // Generate food at random position
    function generateFood() {
        const maxX = Math.floor(canvas.width / gridSize) - 1;
        const maxY = Math.floor(canvas.height / gridSize) - 1;
        
        // Generate random position
        let foodX, foodY;
        let validPosition = false;
        
        while (!validPosition) {
            foodX = Math.floor(Math.random() * maxX) * gridSize;
            foodY = Math.floor(Math.random() * maxY) * gridSize;
            
            // Check if food position overlaps with snake
            validPosition = true;
            for (let segment of snake) {
                if (segment.x === foodX && segment.y === foodY) {
                    validPosition = false;
                    break;
                }
            }
        }
        
        food = { x: foodX, y: foodY };
    }
    
    // Game step function
    function gameStep() {
        // Update direction
        direction = nextDirection;
        
        // Calculate new head position
        const head = { ...snake[0] };
        switch (direction) {
            case 'up':
                head.y -= gridSize;
                break;
            case 'down':
                head.y += gridSize;
                break;
            case 'left':
                head.x -= gridSize;
                break;
            case 'right':
                head.x += gridSize;
                break;
        }
        
        // Check for collisions
        if (checkCollision(head)) {
            gameOver();
            return;
        }
        
        // Add new head
        snake.unshift(head);
        
        // Check if snake ate food
        if (head.x === food.x && head.y === food.y) {
            // Increase score
            score++;
            scoreElement.textContent = score;
            
            // Update high score if needed
            if (score > highScore) {
                highScore = score;
                highScoreElement.textContent = highScore;
                localStorage.setItem('snakeHighScore', highScore);
            }
            
            // Generate new food
            generateFood();
            
            // Increase speed slightly
            if (gameSpeed > 70 && score % 8 === 0) {
                clearInterval(gameLoop);
                gameSpeed -= 3;
                gameLoop = setInterval(gameStep, gameSpeed);
            }
        } else {
            // Remove tail if snake didn't eat food
            snake.pop();
        }
        
        // Draw game
        drawGame();
    }
    
    // Check for collisions
    function checkCollision(head) {
        // Check wall collision
        if (
            head.x < 0 ||
            head.y < 0 ||
            head.x >= canvas.width ||
            head.y >= canvas.height
        ) {
            return true;
        }
        
        // Check self collision
        for (let i = 1; i < snake.length; i++) {
            if (head.x === snake[i].x && head.y === snake[i].y) {
                return true;
            }
        }
        
        return false;
    }
    
    // Draw game elements
    function drawGame() {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw snake
        snake.forEach((segment, index) => {
            // Head has different color
            if (index === 0) {
                ctx.fillStyle = '#4ecca3'; // Head color
            } else {
                // Gradient color for body segments
                const colorValue = 180 - (index * 5 > 100 ? 100 : index * 5);
                ctx.fillStyle = `rgb(78, ${colorValue}, 163)`;
            }
            
            // Draw rounded rectangle for segments
            drawRoundedRect(
                ctx,
                segment.x,
                segment.y,
                gridSize,
                gridSize,
                index === 0 ? gridSize / 3 : gridSize / 5 // Head has more rounded corners
            );
        });
        
        // Draw food
        ctx.fillStyle = '#e84545'; // Food color
        drawRoundedRect(ctx, food.x, food.y, gridSize, gridSize, gridSize / 2);
        
        // Draw food glow effect
        ctx.shadowColor = '#e84545';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(food.x + gridSize / 2, food.y + gridSize / 2, gridSize / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow
    }
    
    // Helper function to draw rounded rectangles
    function drawRoundedRect(context, x, y, width, height, radius) {
        context.beginPath();
        context.moveTo(x + radius, y);
        context.lineTo(x + width - radius, y);
        context.quadraticCurveTo(x + width, y, x + width, y + radius);
        context.lineTo(x + width, y + height - radius);
        context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        context.lineTo(x + radius, y + height);
        context.quadraticCurveTo(x, y + height, x, y + height - radius);
        context.lineTo(x, y + radius);
        context.quadraticCurveTo(x, y, x + radius, y);
        context.closePath();
        context.fill();
    }
    
    // Game over function
    function gameOver() {
        gameActive = false;
        clearInterval(gameLoop);
        finalScoreElement.textContent = score;
        gameOverModal.style.display = 'flex';
    }
    
    // Keyboard controls
    document.addEventListener('keydown', (e) => {
        if (!gameActive) return;
        
        switch (e.key) {
            case 'ArrowUp':
                if (direction !== 'down') nextDirection = 'up';
                break;
            case 'ArrowDown':
                if (direction !== 'up') nextDirection = 'down';
                break;
            case 'ArrowLeft':
                if (direction !== 'right') nextDirection = 'left';
                break;
            case 'ArrowRight':
                if (direction !== 'left') nextDirection = 'right';
                break;
        }
    });
    
    // Mobile controls
    upBtn.addEventListener('click', () => {
        if (gameActive && direction !== 'down') nextDirection = 'up';
    });
    
    downBtn.addEventListener('click', () => {
        if (gameActive && direction !== 'up') nextDirection = 'down';
    });
    
    leftBtn.addEventListener('click', () => {
        if (gameActive && direction !== 'right') nextDirection = 'left';
    });
    
    rightBtn.addEventListener('click', () => {
        if (gameActive && direction !== 'left') nextDirection = 'right';
    });
    
    // Touch swipe controls
    let touchStartX = 0;
    let touchStartY = 0;
    
    canvas.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
        e.preventDefault(); // Prevent scrolling when touching the canvas
    }, { passive: false });
    
    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault(); // Prevent scrolling when touching the canvas
    }, { passive: false });
    
    canvas.addEventListener('touchend', (e) => {
        if (!gameActive) return;
        
        const touchEndX = e.changedTouches[0].screenX;
        const touchEndY = e.changedTouches[0].screenY;
        
        const diffX = touchEndX - touchStartX;
        const diffY = touchEndY - touchStartY;
        
        // Determine swipe direction based on which axis had larger movement
        if (Math.abs(diffX) > Math.abs(diffY)) {
            // Horizontal swipe
            if (diffX > 50 && direction !== 'left') {
                nextDirection = 'right';
            } else if (diffX < -50 && direction !== 'right') {
                nextDirection = 'left';
            }
        } else {
            // Vertical swipe
            if (diffY > 50 && direction !== 'up') {
                nextDirection = 'down';
            } else if (diffY < -50 && direction !== 'down') {
                nextDirection = 'up';
            }
        }
    });
    
    // Restart button
    restartBtn.addEventListener('click', () => {
        gameOverModal.style.display = 'none';
        initGame();
    });
    
    // Start game when page loads
    initGame();
    
    // Add click event to canvas to start game on mobile
    canvas.addEventListener('click', () => {
        if (!gameActive) {
            gameOverModal.style.display = 'none';
            initGame();
        }
    });
});