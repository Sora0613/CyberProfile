document.addEventListener('DOMContentLoaded', () => {
    const text = "Hi, I'm [name].";
    const typingText = document.getElementById('typing-text');
    let index = 0;

    function typeText() {
        if (index < text.length) {
            typingText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 100);
        } else {
            setTimeout(eraseText, 2000);
        }
    }

    function eraseText() {
        if (index > 0) {
            typingText.innerHTML = text.substring(0, index - 1);
            index--;
            setTimeout(eraseText, 50);
        } else {
            setTimeout(typeText, 500);
        }
    }

    typeText();
});