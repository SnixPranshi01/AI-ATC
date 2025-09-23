    async function handleLogin() {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const errorMessage = document.getElementById('error-message');
            
            // Basic validation
            if (!email || !password) {
                errorMessage.textContent = "Please enter both email and password";
                errorMessage.style.display = "block";
                return;
            }
            
            try {
                // Show loading state
                const loginButton = document.getElementById('diffcontainer');
                loginButton.textContent = "Logging in...";
                loginButton.disabled = true;
                
                // Call login API
                const user = await api.auth.login(email, password);
                
                // Success - redirect to dashboard
                window.location.href = "index.html";
            } catch (error) {
                // Display error
                errorMessage.textContent = error.message || "Login failed. Please check your credentials.";
                errorMessage.style.display = "block";
                
                // Reset button
                const loginButton = document.getElementById('diffcontainer');
                loginButton.textContent = "Log in";
                loginButton.disabled = false;
            }
        }