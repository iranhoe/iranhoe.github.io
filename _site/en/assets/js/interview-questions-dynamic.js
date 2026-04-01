document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('questions-container');
    const lang = document.documentElement.lang || 'es';
    let questionsData = {};
    let filteredData = {};

    // UI Labels
    const uiLabels = lang.startsWith('en') 
        ? { area: 'Area:', category: 'Category:', all: 'All', level: 'Level', hint: 'Hint', question: 'Question', company: 'Company', answer: 'Answer' }
        : { area: 'Área:', category: 'Categoría:', all: 'Todas', level: 'Nivel', hint: 'Indicio', question: 'Pregunta', company: 'Lugar', answer: 'Respuesta' };

    // Injected styles
    const style = document.createElement('style');
    style.innerHTML = `
        .filter-section {
            display: flex;
            gap: 20px;
            margin-bottom: 30px;
            background: var(--table-header-bg, #f8f9fa);
            padding: 20px;
            border-radius: 8px;
            border: 1px solid #ddd;
        }
        .filter-group {
            display: flex;
            flex-direction: column;
            gap: 5px;
            flex: 1;
        }
        .filter-group label {
            font-weight: bold;
            font-size: 0.9rem;
        }
        .filter-group select {
            padding: 8px;
            border-radius: 5px;
            border: 1px solid #ccc;
            background: var(--main-bg, #fff);
            color: var(--text-color, #212529);
        }
        #questions-container table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 2rem;
            border: 1px solid #ddd;
        }
        #questions-container th, #questions-container td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        #questions-container th {
            background-color: var(--table-header-bg, #f8f9fa);
        }
        .hint-toggle {
            cursor: pointer;
            background: none;
            border: none;
            font-size: 1.2rem;
            padding: 0;
            color: var(--link-color, #007bff);
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
        }
        .details-row {
            display: none;
            background-color: var(--table-header-bg, #f8f9fa);
        }
        .details-row.open {
            display: table-row;
        }
        .details-container {
            padding: 15px;
            background: var(--main-bg, #fff);
            border-radius: 10px;
            margin: 10px;
            border: 1px solid #eee;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        .details-label {
            font-weight: bold;
            display: block;
            margin-bottom: 5px;
            color: var(--text-muted-color, #6c757d);
            font-size: 0.9rem;
        }
        .details-content {
            display: block;
            margin-bottom: 15px;
        }
        .details-content:last-child {
            margin-bottom: 0;
        }
        .lvl-col { width: 50px; text-align: center !important; }
        .hint-col { width: 60px; text-align: center !important; }
    `;
    document.head.appendChild(style);

    const createFilters = () => {
        const filterSection = document.createElement('div');
        filterSection.className = 'filter-section';

        const areaGroup = document.createElement('div');
        areaGroup.className = 'filter-group';
        areaGroup.innerHTML = `
            <label for="area-select">${uiLabels.area}</label>
            <select id="area-select">
                <option value="all">${uiLabels.all}</option>
            </select>
        `;

        const categoryGroup = document.createElement('div');
        categoryGroup.className = 'filter-group';
        categoryGroup.innerHTML = `
            <label for="category-select">${uiLabels.category}</label>
            <select id="category-select">
                <option value="all">${uiLabels.all}</option>
            </select>
        `;

        filterSection.appendChild(areaGroup);
        filterSection.appendChild(categoryGroup);
        container.parentNode.insertBefore(filterSection, container);

        const areaSelect = document.getElementById('area-select');
        const categorySelect = document.getElementById('category-select');

        // Populate Areas
        const areas = new Set();
        Object.values(questionsData).forEach(cat => {
            cat.forEach(q => {
                if (q.area && Array.isArray(q.area)) {
                    q.area.forEach(a => areas.add(a));
                }
            });
        });
        [...areas].sort().forEach(area => {
            const opt = document.createElement('option');
            opt.value = area;
            opt.textContent = area;
            areaSelect.appendChild(opt);
        });

        // Event Listeners
        areaSelect.addEventListener('change', () => {
            updateCategoryOptions(areaSelect.value);
            applyFilters();
        });

        categorySelect.addEventListener('change', () => {
            applyFilters();
        });

        const updateCategoryOptions = (selectedArea) => {
            const currentCategory = categorySelect.value;
            categorySelect.innerHTML = `<option value="all">${uiLabels.all}</option>`;
            
            const categories = new Set();
            for (const [catName, questions] of Object.entries(questionsData)) {
                if (selectedArea === 'all' || questions.some(q => q.area && q.area.includes(selectedArea))) {
                    categories.add(catName);
                }
            }

            [...categories].sort().forEach(cat => {
                const opt = document.createElement('option');
                opt.value = cat;
                opt.textContent = cat;
                if (cat === currentCategory) opt.selected = true;
                categorySelect.appendChild(opt);
            });
        };

        const applyFilters = () => {
            const selectedArea = areaSelect.value;
            const selectedCategory = categorySelect.value;
            filteredData = {};

            for (const [catName, questions] of Object.entries(questionsData)) {
                if (selectedCategory !== 'all' && catName !== selectedCategory) continue;

                const filteredQuestions = questions.filter(q => {
                    if (q.lvl === ':---:') return false;
                    if (selectedArea === 'all') return true;
                    return q.area && q.area.includes(selectedArea);
                });

                if (filteredQuestions.length > 0) {
                    filteredData[catName] = filteredQuestions;
                }
            }
            renderTables(lang.startsWith('en') ? 'en' : 'es');
        };

        updateCategoryOptions('all');
        applyFilters();
    };

    const renderTables = (renderLang) => {
        if (!container) return;
        container.innerHTML = '';
        
        for (const category in filteredData) {
            const h3 = document.createElement('h3');
            h3.textContent = category;
            container.appendChild(h3);

            const table = document.createElement('table');
            const thead = document.createElement('thead');
            const tbody = document.createElement('tbody');

            thead.innerHTML = `
                <tr>
                    <th class="lvl-col">${uiLabels.level}</th>
                    <th class="hint-col">${uiLabels.hint}</th>
                    <th>${uiLabels.question}</th>
                </tr>
            `;
            table.appendChild(thead);

            filteredData[category].forEach((q, index) => {
                const qText = q.question[renderLang] || '';
                const hText = q.hint[renderLang] || '';
                const cText = q.company || '';
                const rowId = `details-${category.replace(/\s+/g, '-')}-${index}`;

                // Main Row
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td class="lvl-col">${q.lvl}</td>
                    <td class="hint-col">
                        <button class="hint-toggle" aria-expanded="false" aria-controls="${rowId}">
                            <i class="far fa-lightbulb"></i>
                        </button>
                    </td>
                    <td>${qText}</td>
                `;
                tbody.appendChild(tr);

                // Expandable Row
                const detailsTr = document.createElement('tr');
                detailsTr.id = rowId;
                detailsTr.className = 'details-row';
                detailsTr.innerHTML = `
                    <td colspan="3">
                        <div class="details-container">
                            <span class="details-label">${uiLabels.company}:</span>
                            <span class="details-content">${cText}</span>
                            <span class="details-label">${uiLabels.answer}:</span>
                            <span class="details-content">${hText}</span>
                        </div>
                    </td>
                `;
                tbody.appendChild(detailsTr);

                // Toggle Event
                const toggleBtn = tr.querySelector('.hint-toggle');
                toggleBtn.addEventListener('click', () => {
                    const isOpen = detailsTr.classList.toggle('open');
                    toggleBtn.setAttribute('aria-expanded', isOpen);
                    const icon = toggleBtn.querySelector('i');
                    if (isOpen) {
                        icon.classList.remove('far', 'fa-lightbulb');
                        icon.classList.add('fas', 'fa-lightbulb');
                    } else {
                        icon.classList.remove('fas', 'fa-lightbulb');
                        icon.classList.add('far', 'fa-lightbulb');
                    }
                });
            });

            table.appendChild(tbody);
            container.appendChild(table);
        }
    };

    fetch('/assets/data/interview-questions.json')
        .then(response => response.json())
        .then(data => {
            questionsData = data;
            createFilters();
        })
        .catch(error => console.error('Error loading questions:', error));
});
