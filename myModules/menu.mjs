export function createMenu() {
    const menu = document.createElement('ul');
    const items = ['Home', 'Students', 'Courses'];

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        menu.appendChild(li);
    });

    document.body.appendChild(menu);
}