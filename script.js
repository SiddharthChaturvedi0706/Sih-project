document.addEventListener('DOMContentLoaded', () => {
    const registerTab = document.getElementById('registerTab');
    const loginTab = document.getElementById('loginTab');
    const formTitle = document.getElementById('formTitle');
    const formSubtitle = document.getElementById('formSubtitle');
    const nameField = document.getElementById('nameField');
    const landholdingField = document.getElementById('landholdingField');
    const soilTypeField = document.getElementById('soilTypeField');
    const getOtpButton = document.getElementById('getOtpButton');
    const otpField = document.getElementById('otpField');
    const otpInput = document.getElementById('otp');
    const submitButton = document.getElementById('submitButton');
    const authForm = document.getElementById('authForm');
    const contactInput = document.getElementById('contact');

    function setFormMode(mode) {
        if (mode === 'register') {
            registerTab.classList.add('active');
            loginTab.classList.remove('active');
            formTitle.innerHTML = 'Farmer Registration 🌾';
            formSubtitle.textContent = 'Create an account for real-time crop advice.';
            nameField.classList.remove('hidden');
            landholdingField.classList.remove('hidden');
            soilTypeField.classList.remove('hidden');
            submitButton.textContent = 'Register';
        } else {
            loginTab.classList.add('active');
            registerTab.classList.remove('active');
            formTitle.innerHTML = 'Welcome Back! 👋';
            formSubtitle.textContent = 'Login to access your dashboard.';
            nameField.classList.add('hidden');
            landholdingField.classList.add('hidden');
            soilTypeField.classList.add('hidden');
            submitButton.textContent = 'Login';
        }
        authForm.reset();
        otpField.classList.add('hidden');
    }

    registerTab.addEventListener('click', () => setFormMode('register'));
    loginTab.addEventListener('click', () => setFormMode('login'));

    getOtpButton.addEventListener('click', () => {
        const contactValue = contactInput.value.trim();
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactValue);
        const isMobile = /^\d{10}$/.test(contactValue);

        if (isEmail || isMobile) {
            alert(`OTP sent to ${contactValue}. For this demo, you can enter any number.`);
            otpField.classList.remove('hidden');
        } else {
            alert('Please enter a valid 10-digit mobile number or a correct email address.');
        }
    });
    
    authForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
        if (!otpField.classList.contains('hidden')) {
            if (otpInput.value.trim() !== '') {
                console.log('Login/Registration successful. Redirecting...');
                window.location.href = 'home.html';
            } else {
                alert('Please enter the OTP to proceed.');
            }
        } else {
            alert('Please click "Get OTP" first.');
        }
    });

    setFormMode('register');
});
