document.addEventListener('DOMContentLoaded', function() {
    const menuSection = document.getElementById('menu-section');
    const filterBtns = document.querySelectorAll('.filter-btn');
  
    filterBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const category = btn.dataset.category;
        filterMenu(category);
      });
    });
  
    function filterMenu(category) {
      if (category === 'all') {
        displayMenu(menu);
      } else {
        const filteredMenu = menu.filter(function(item) {
          return item.category === category;
        });
        displayMenu(filteredMenu);
      }
    }
  
    function displayMenu(menuItems) {
      let menuHTML = '';
      menuItems.forEach(function(item) {
        menuHTML += `
          <div class="menu-item">
            <img src="${item.img}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
            <span>${item.price} TL</span>
          </div>
        `;
      });
      menuSection.innerHTML = menuHTML;
    }
  
    const menu = [
      {
        id: 1,
        title: 'Gyoza',
        category: 'starter',
        price: 18,
        img: 'images/gyoza.jpg',
        desc: 'Japon mantısı.'
      },
      {
        id: 2,
        title: 'Sushi',
        category: 'starter',
        price: 25,
        img: 'images/sushi.jpg',
        desc: 'Çiğ balık ve pirinç.'
      },
      {
        id: 3,
        title: 'Peking Duck',
        category: 'main-course',
        price: 75,
        img: 'images/peking-duck.jpg',
        desc: 'Çin usulü ördek yemeği.'
      },
      {
        id: 4,
        title: 'Kung Pao Chicken',
        category: 'main-course',
        price: 35,
        img: 'images/kung-pao-chicken.jpg',
        desc: 'Acılı tavuk yemeği.'
      },
      {
        id: 5,
        title: 'Matcha Ice Cream',
        category: 'dessert',
        price: 12,
        img: 'images/matcha-ice-cream.jpg',
        desc: 'Yeşil çaylı dondurma.'
      },
      {
        id: 6,
        title: 'Mochi',
        category: 'dessert',
        price: 15,
        img: 'images/mochi.jpg',
        desc: 'Japon pirinç tatlısı.'
      }
    ];
  
    displayMenu(menu);
  });
  