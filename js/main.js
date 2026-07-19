// ننتظر حتى يتم تحميل محتوى الصفحة بالكامل
document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. تفاعل صفحة تسجيل الدخول (Login Page)
    // ==========================================
    const loginForm = document.querySelector('.login-container form');
    const loginBtn = document.querySelector('.btn-submit');

    if (loginForm && loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            // التحقق من الحقول
            if (email === '' || password === '') {
                e.preventDefault(); // منع الانتقال للصفحة الأخرى
                alert('عذراً، يرجى ملء جميع الحقول المطلوبة لتسجيل الدخول!');
            } else if (password.length < 6) {
                e.preventDefault();
                alert('كلمة المرور يجب ألا تقل عن 6 خانات.');
            } else {
                alert('مرحباً بك في RecipeHub! جاري توجيهك للرئيسية...');
            }
        });
    }

    // ==========================================
    // 2. ميزة البحث الحي في صفحة الوصفات (Live Search)
    // ==========================================
    // سنقوم أولاً بإضافة شريط بحث ديناميكياً أعلى شبكة الوصفات إذا كنا في صفحة الوصفات
    const recipesGrid = document.querySelector('.recipes-grid');
    const container = document.querySelector('.container');

    if (recipesGrid && container) {
        // إنشاء عنصر إدخال للبحث
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = '🔍 ابحث عن وصفتك المفضلة هنا... (مثال: بيتزا، كبسة)';
        searchInput.className = 'search-bar';
        
        // إدخال شريط البحث قبل شبكة الوصفات
        container.insertBefore(searchInput, recipesGrid);

        // إضافة حدث البحث عند الكتابة
        searchInput.addEventListener('input', (e) => {
            const filterText = e.target.value.toLowerCase().trim();
            const recipeCards = document.querySelectorAll('.recipe-card');

            recipeCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();

                // إذا كان اسم الوصفة أو المكونات تحتوي على النص المكتوب
                if (title.includes(filterText) || description.includes(filterText)) {
                    card.style.display = 'block'; // إظهار
                    card.style.animation = 'fadeIn 0.5s ease';
                } else {
                    card.style.display = 'none'; // إخفاء
                }
            });
        });
    }

    // ==========================================
    // 3. تفاعل صفحة تواصل معنا (Contact Us)
    // ==========================================
    const contactForm = document.querySelector('.contact-container form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // منع إعادة تحميل الصفحة الافتراضية

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('الرجاء كتابة جميع البيانات قبل الإرسال.');
            } else {
                // محاكاة إرسال ناجح للمرحلة الحالية
                alert(`شكراً لك يا ${name}! تم استلام رسالتك بنجاح وسنرد عليك قريباً.`);
                contactForm.reset(); // تفريغ الحقول بعد الإرسال
            }
        });
    }

    // ==========================================
    // 4. حركات تفاعلية لكروت الوصفات (Visual Effects)
    // ==========================================
    const cards = document.querySelectorAll('.recipe-card, .feature-card');
    cards.forEach(card => {
        card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
            card.style.box-shadow = '0 10px 20px rgba(0,0,0,0.15)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.box-shadow = '0 4px 10px rgba(0,0,0,0.08)';
        });
    });
});
