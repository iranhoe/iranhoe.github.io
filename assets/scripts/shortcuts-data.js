const shortcuts = [
    {
        section: "general",
        name: "General",
        commands: [
            {
                name: "Show Command Palette",
                favorite: true,
                ides: [
                    {
                        id: "vscode",
                        name: "Show Command Palette",
                        commandId: "?",
                        command: "Ctrl+Shift+P, F1",
                    }
                ]
            },
            {
                name: "Quick Open, Go To File",
                favorite: true,
                ides: [
                    {
                        id: "vscode",
                        name: "Quick Open, Go To File...",
                        commandId: "?",
                        command: "Ctrl+P",
                    }
                ]
            }
        ]
    },
    {
        section: "editing",
        name: "Basic Editing",
        commands: [
            {
                name: "Cut line (empty selection)",
                favorite: true,
                ides: [
                    {
                        id: "vscode",
                        name: "Cut line (empty selection)",
                        commandId: "?",
                        command: "Ctrl+X",
                    },
                    {
                        id: "vs2022",
                        name: "Cut line (empty selection)",
                        commandId: "?",
                        command: "Ctrl+X",
                    }
                ]
            },
            {
                name: "Copy line (empty selection)",
                favorite: true,
                ides: [
                    {
                        id: "vscode",
                        name: "Copy line (empty selection)",
                        commandId: "?",
                        command: "Ctrl+C",
                    }
                ]
            }
        ]
    }
];

const nameIndex = 1;
const commandIdIndex = 2;
const commandIndex = 3;
const cols = 3;

const columns = [
    {
        name: "Name of the IDE/Edit",
        class: "name-ide",
        column: "name",
        shotName: "name"
    },
    {
        name: "Command Id of the IDE/Edit",
        class: "com-ide",
        column: "commandId",
        shotName: "command id"
    },
    {
        name: "Keys of the IDE/Edit",
        class: "keys-ide",
        column: "command",
        shotName: "keys"
    }
]

const IDEs = [
    { name: "visual studio 2022", class:"vs2022", id: "vs2022" },
    { name: "visual studio code", class:"vscode", id: "vscode" }
];

switchDisplay = (className, visible) => { 
    document.querySelectorAll("."+ className) .forEach((item, inde) => {
        item.style.display = visible ? "none" : "table-cell";
    });
}

switchClass = (className, visibleClass) => { 
    document.querySelectorAll("."+ className) .forEach((item, inde) => {
        item.classList.toggle(visibleClass);
    });
}

// Generate table
(function() {
    const tables = document.querySelector("#tables");

    // sections
    function createSections() {
        for(let i=0; i < shortcuts.length; i++) {
            const title = document.createElement('h2');
            title.innerText = shortcuts[i].name;

            const table = document.createElement('table');

            const tableHead = document.createElement('thead');
            table.appendChild(tableHead);
            createHeader(tableHead);

            const tableBody = document.createElement('tbody');
            table.appendChild(tableBody);

            const commands = shortcuts[i].commands;
            createRowPerCommands(commands, tableBody)

            tables.appendChild(title);
            tables.appendChild(table);
        }
    }

    // create header
    function createHeader(tableHead) {
        const tr = document.createElement('tr');
        tableHead.appendChild(tr);
        for (let iide = 0; iide < IDEs.length; iide++) {
            // const ide = command.ides.filter(x => x.id === IDEs[iide].id);
            for (let ic = 0; ic < columns.length; ic++) {
                // let cell = "?";
                // if (ide.length > 0) {
                //     const columnName = columns[ic].column;
                //     cell = ide[0][columnName];
                // }

                const td = document.createElement('th');
                td.appendChild(document.createTextNode(`${IDEs[iide].name}`));
                tr.appendChild(td);
            }
        }
    }

    // rows
    function createRowPerCommands(commands, tableBody) {
        for (let ci = 0; ci < commands.length; ci++) {
            const tr = document.createElement('tr');
            tableBody.appendChild(tr);
            createColumns(commands[ci], tr);
        }
    }

    // columns per ide
    function createColumns(command, tr) {
        for (let iide = 0; iide < IDEs.length; iide++) {
            const ide = command.ides.filter(x => x.id === IDEs[iide].id);
            for (let ic = 0; ic < columns.length; ic++) {
                let cell = "?";
                if (ide.length > 0) {
                    const columnName = columns[ic].column;
                    cell = ide[0][columnName];
                }

                const td = document.createElement('td');
                td.appendChild(document.createTextNode(`${cell}`));
                tr.appendChild(td);
            }
        }
    }

    createSections();
})();


for(let i = 0; i < IDEs.length; i++) {

    let classForId = "ide-" + IDEs[i].class;
    const ideControl = document.querySelector("#"+classForId);
    ideControl.addEventListener('click', (e, i) => switchDisplay(classForId, ideControl.checked));

    let colName    = (cols*i)+nameIndex;
    let colId      = (cols*i)+commandIdIndex;
    let colCommand = (cols*i)+commandIndex;
    console.log(colName, colId, colCommand);

    // name
    document.querySelectorAll(`thead tr th:nth-child(${colName})`).forEach((item, index) => {
        item.classList.add(classForId);
        item.classList.add("name-ide");
    });
    document.querySelectorAll(`tbody tr td:nth-child(${colName})`).forEach((item, index) => {
        item.classList.add(classForId);
        item.classList.add("name-ide");
    });

    // command
    document.querySelectorAll(`thead tr th:nth-child(${colId})`).forEach((item, index) => {
        console.log(classForId, item.innerHTML);
        item.classList.add(classForId);
        item.classList.add("com-ide");
    });
    document.querySelectorAll(`tbody tr td:nth-child(${colId})`).forEach((item, index) => {
        item.classList.add(classForId);
        item.classList.add("com-ide");
    });

    // keys
    document.querySelectorAll(`thead tr th:nth-child(${colCommand})`).forEach((item, index) => {
        item.classList.add(classForId);
        item.classList.add("keys-ide");
    });
    document.querySelectorAll(`tbody tr td:nth-child(${colCommand})`).forEach((item, index) => {
        item.classList.add(classForId);
        item.classList.add("keys-ide");
    });
}

const checkboxCom = document.querySelector("#com-switch");
const checkboxName = document.querySelector("#name-switch");

checkboxCom.addEventListener('click', (e, i) => switchClass("com-ide", "hide-com"));
checkboxName.addEventListener('click', (e, i) => switchClass("name-ide", "hide-name"));