document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("lang-switch");
  if (toggle) {
    toggle.addEventListener("change", function () {
      const isEn = this.checked;
      document.querySelectorAll("table").forEach((table) => {
        const rows = table.querySelectorAll("tr");
        rows.forEach((row) => {
          const cells = Array.from(row.children);
          if (cells.length >= 4) {
             const esCols = [2, 4]; 
             const enCols = [3, 5];
             
             esCols.forEach(idx => {
               if(cells[idx]) {
                 if(isEn) cells[idx].classList.add("hide");
                 else cells[idx].classList.remove("hide");
               }
             });
             
             enCols.forEach(idx => {
               if(cells[idx]) {
                 if(isEn) cells[idx].classList.remove("hide");
                 else cells[idx].classList.add("hide");
               }
             });
          }
        });
      });
    });
    
    // Initial state: hide EN columns (even index 3, 5)
    document.querySelectorAll("table tr").forEach(row => {
      const cells = Array.from(row.children);
      if (cells.length >= 4) {
        if (cells[3]) cells[3].classList.add("hide");
        if (cells[5]) cells[5].classList.add("hide");
      }
    });
  }
});
