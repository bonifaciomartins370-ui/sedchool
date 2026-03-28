function show(id) {
    let pages = document.querySelectorAll(".page");
    let buttons = document.querySelectorAll(".menu button");
  
    pages.forEach(p => p.classList.remove("active"));
    buttons.forEach(b => b.classList.remove("active"));
  
    document.getElementById(id).classList.add("active");
  
    event.target.classList.add("active");
  }
  
  function toggleDark() {
    document.body.classList.toggle("dark");
  
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }
  
  window.onload = () => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
    }
  };
  