// Change background gradient colors dynamically
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    
    function changeBackgroundColor() {
      const colors = [
        ['#6a11cb', '#2575fc'], // Blue-Purple
        ['#FF7E5F', '#FEB47B'], // Sunset Gradient
        ['#3b8d99', '#6b3f76'], // Purple-Turquoise
        ['#ff9a8b', '#ff6a88'], // Light Pink Gradients
        ['#a18cd1', '#fbc2eb'], // Pastel Purple-Pink
      ];
  
      // Randomly pick a gradient
      const randomGradient = colors[Math.floor(Math.random() * colors.length)];
      
      // Apply new background gradient
      body.style.background = `linear-gradient(45deg, ${randomGradient[0]}, ${randomGradient[1]})`;
      body.style.backgroundSize = '400% 400%';
    }
  
    // Change background color every 10 seconds
    setInterval(changeBackgroundColor, 10000);
  });
  