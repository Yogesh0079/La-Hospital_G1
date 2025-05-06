document.addEventListener('DOMContentLoaded', function() {
    const signInTab = document.getElementById('signInTab');
    const signUpTab = document.getElementById('signUpTab');
    const signInFields = document.getElementById('signInFields');
    const signUpFields = document.getElementById('signUpFields');
    const submitBtn = document.getElementById('submitBtn');
    const authForm = document.getElementById('authForm');
    
    // Form state
    let formState = {
        firstname: '',
        lastname: '',
        email: '',
        contact: '',
        password: ''
    };
    
    // Tab switching
    signInTab.addEventListener('click', function(e) {
        e.preventDefault();
        signInTab.classList.add('tab-active');
        signInTab.classList.remove('bg-gray-100', 'text-gray-700');
        signUpTab.classList.remove('tab-active');
        signUpTab.classList.add('bg-gray-100', 'text-gray-700');
        signInFields.classList.remove('hidden');
        signUpFields.classList.add('hidden');
        submitBtn.textContent = 'Sign In';
    });
    
    signUpTab.addEventListener('click', function(e) {
        e.preventDefault();
        signUpTab.classList.add('tab-active');
        signUpTab.classList.remove('bg-gray-100', 'text-gray-700');
        signInTab.classList.remove('tab-active');
        signInTab.classList.add('bg-gray-100', 'text-gray-700');
        signUpFields.classList.remove('hidden');
        signInFields.classList.add('hidden');
        submitBtn.textContent = 'Sign Up';
    });
    
    // Form input handling
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', function(e) {
            const { name, value } = e.target;
            formState[name] = value;
        });
    });
    
    // Form submission
    authForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (submitBtn.textContent === 'Sign In') {
            // Handle sign in
            console.log('Signing in with:', {
                email: formState.email,
                password: formState.password
            });
            
            // Simulate API call
            setTimeout(() => {
                alert('Sign in successful! Redirecting...');
                // window.location.href = '/dashboard';
            }, 1000);
        } else {
            // Handle sign up
            console.log('Creating account with:', {
                first_name: formState.firstname,
                last_name: formState.lastname,
                contact: formState.contact,
                email: formState.email,
                password: formState.password
            });
            
            // Simulate API call
            setTimeout(() => {
                alert('Account created successfully! Please sign in.');
                signInTab.click();
            }, 1000);
        }
    });
});