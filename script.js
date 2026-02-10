// Navigation Functions
function openPage(page) { window.location.href = page; }
function goBack() { window.location.href = "index.html"; }

// Data Save Karne Ka Main Function
function saveToStorage(key, data) {
    let list = JSON.parse(localStorage.getItem(key)) || [];
    list.push(data);
    localStorage.setItem(key, JSON.stringify(list));
    alert(key.toUpperCase() + " Record Saved!");
    location.reload();
}

// 👷 Workers Logic
function saveWorker() {
    let name = document.getElementById('wName').value;
    let salary = document.getElementById('wSalary').value;
    if(name && salary) {
        saveToStorage('workers', { name: name, salary: salary });
    } else {
        alert("Worker ka naam aur salary likhen!");
    }
}

// 💸 Daily Expenses Logic
function saveExpense() {
    let desc = document.getElementById('exDesc').value;
    let amount = document.getElementById('exAmount').value;
    if(desc && amount) {
        saveToStorage('expenses', { 
            description: desc, 
            amount: amount, 
            date: new Date().toLocaleDateString() 
        });
    } else {
        alert("Kharchay ki detail aur amount likhen!");
    }
}

// 🏢 Companies Logic
function saveCompany() {
    let name = document.getElementById('comName').value;
    let balance = document.getElementById('comBalance').value;
    if(name && balance) saveToStorage('companies', { name, balance });
    else alert("Company details bharien!");
}

// 📦 Products Logic
function saveProduct() {
    let name = document.getElementById('pName').value;
    let qty = document.getElementById('pQty').value;
    if(name && qty) saveToStorage('products', { name, qty });
    else alert("Product details bharien!");
}

// 👤 Customers Logic
function saveCustomer() {
    let name = document.getElementById('cName').value;
    let udhar = document.getElementById('cUdhar').value;
    if(name && udhar) saveToStorage('customers', { name, udhar });
    else alert("Customer details bharien!");
}

// 🛒 Orders Logic
function saveOrder() {
    let cust = document.getElementById('oCust').value;
    let prod = document.getElementById('oProd').value;
    let qty = document.getElementById('oQty').value;
    if(cust && prod) saveToStorage('orders', { cust, prod, qty });
    else alert("Order details bharien!");
}

// 🧾 Sales Logic
function saveSale() {
    let cust = document.getElementById('sCust').value;
    let prod = document.getElementById('sProd').value;
    let qty = document.getElementById('sQty').value;
    if(cust && qty) saveToStorage('sales', { cust, prod, qty, date: new Date().toLocaleDateString() });
    else alert("Sale details bharien!");
}
// Check if user is logged in
if (window.location.pathname.indexOf("login.html") === -1) {
    if (sessionStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "login.html";
    }
}

// Logout Function
function logout() {
    sessionStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
}
// Logout Function
function logout() {
    // Session khatam karna
    sessionStorage.removeItem("isLoggedIn");
    // Login page par wapas bhejna
    window.location.href = "login.html";
}
// Footer ko automatic har page par lagane ka function
function addAutoFooter() {
    let footerHTML = `
        <footer style="position: fixed; bottom: 0; left: 0; width: 100%; background: #2c3e50; color: white; padding: 10px 0; overflow: hidden; z-index: 1000; border-top: 2px solid #f1c40f;">
            <div style="display: inline-block; white-space: nowrap; animation: marquee 20s linear infinite; font-family: sans-serif; font-weight: bold;">
                Offline Local System | 1 MG Trader | Managed by Management System | All Rights Reserved 2024-25 | Location: Lahore, Pakistan
            </div>
        </footer>
        <style>
            @keyframes marquee {
                0% { transform: translateX(100%); }
                100% { transform: translateX(-100%); }
            }
            body { padding-bottom: 60px; } /* Footer ke niche jagah banane ke liye */
        </style>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// Page load hotay hi footer add ho jaye
window.onload = addAutoFooter;