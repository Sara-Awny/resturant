document.addEventListener('DOMContentLoaded', function() {
    const menuItemsWrapper = document.querySelector('.menu-items-wrapper');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    // تحديد مقدار التمرير (مثلاً، عرض عنصر واحد + الهامش)
    // يمكنك تعديل هذه القيمة لتناسب تصميمك
    const scrollAmount = 330; // عرض العنصر (300px) + الهامش (15px يمين + 15px يسار)

    leftArrow.addEventListener('click', function() {
        menuItemsWrapper.scrollLeft -= scrollAmount;
    });

    rightArrow.addEventListener('click', function() {
        menuItemsWrapper.scrollLeft += scrollAmount;
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // منع الإرسال الافتراضي للصفحة

            // هنا يمكنك إضافة منطق التحقق من صحة المدخلات
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('الرجاء ملء جميع الحقول المطلوبة.');
                return;
            }
            // مثال بسيط للتحقق من البريد الإلكتروني
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('الرجاء إدخال بريد إلكتروني صحيح.');
                return;
            }

            // إذا كان كل شيء تمام، يمكنك هنا إظهار رسالة للمستخدم
            alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.');

            // **ملاحظة:** هنا عادةً يتم إرسال البيانات إلى الخادم باستخدام Fetch API أو XMLHttpRequest.
            // مثال (وهمي - لن يعمل بدون Backend):
            /*
            fetch('/submit-contact-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, subject: document.getElementById('subject').value.trim(), message }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('تم إرسال رسالتك بنجاح!');
                    contactForm.reset(); // تفريغ النموذج
                } else {
                    alert('حدث خطأ أثناء إرسال الرسالة. الرجاء المحاولة مرة أخرى.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('حدث خطأ في الاتصال بالخادم. الرجاء المحاولة لاحقًا.');
            });
            */

            // بعد "الإرسال" الناجح (حتى لو كان وهميًا)، يمكنك تفريغ النموذج
            contactForm.reset();
        });
    }
});