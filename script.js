document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchGrid = document.getElementById('searchGrid');
    const resultCount = document.getElementById('resultCount');

    // თუ ძებნის გვერდზე ვართ, მხოლოდ მაშინ იმუშაოს ამ კოდმა
    if (searchInput) {
        const items = searchGrid.querySelectorAll('.grid-item');

        searchInput.addEventListener('input', (e) => {
            const searchText = e.target.value.toLowerCase();
            let visibleCount = 0;

            items.forEach(item => {
                const itemName = item.getAttribute('data-name').toLowerCase();
                
                if (itemName.includes(searchText)) {
                    item.style.display = "block";
                    visibleCount++;
                } else {
                    item.style.display = "none";
                }
            });

            // განვაახლოთ ნაპოვნი ელემენტების რაოდენობა
            resultCount.innerText = `ნაპოვნია ${visibleCount} ელემენტი`;
        });
    }

    // ღილაკების აქტიური სტატუსის ლოგიკა
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
});