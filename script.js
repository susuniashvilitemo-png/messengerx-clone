document.addEventListener('DOMContentLoaded', () => {
    
    // კატეგორიების მართვა
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // ნავიგაციის მართვა
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // ვიდეო ბარათზე დაჭერა
    const card = document.querySelector('.main-card');
    card.addEventListener('click', () => {
        card.style.transform = "scale(0.96)";
        setTimeout(() => {
            card.style.transform = "scale(1)";
            alert("ვიდეო მალე ჩაირთვება! 🚀");
        }, 100);
    });
});