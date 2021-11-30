const VS2022 = "vs2022";
const VSCODE = "vscode";

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
                        id: VSCODE,
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
                        id: VS2022,
                        name: "Navigate to",
                        commandId: "Edit.NavigateTo",
                        command: "Ctrl+,",
                    },
                    {
                        id: VSCODE,
                        name: "Quick Open, Go To File...",
                        commandId: "?",
                        command: "Ctrl+P",
                    }
                ]
            },
            {
                name: "New window/instance",
                favorite: true,
                ides: [
                    {
                        id: VSCODE,
                        name: "New window/instance",
                        commandId: "?",
                        command: "Ctrl+Shift+N",
                    }
                ]
            },
            {
                name: "Close window/instance",
                favorite: true,
                ides: [
                    {
                        id: VSCODE,
                        name: "Close window/instance",
                        commandId: "?",
                        command: "Ctrl+Shift+W",
                    }
                ]
            },
            {
                name: "User Settings",
                favorite: true,
                ides: [
                    {
                        id: VSCODE,
                        name: "User Settings",
                        commandId: "?",
                        command: "Ctrl+,",
                    }
                ]
            },
            {
                name: "Keyboard Shortcuts",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Keyboard Shortcuts",
                        commandId: "?",
                        command: "Ctrl+K Ctrl+S",
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
                    }
                ]
            },
            {
                name: "Copy line (empty selection)",
                favorite: false,
                ides: [
                    {
                        id: "vscode",
                        name: "Copy line (empty selection)",
                        commandId: "?",
                        command: "Ctrl+C",
                    }
                ]
            },
            {
                name: "Move line up",
                favorite: true,
                ides: [
                    {
                        id: VS2022,
                        name: "Move selected lines up",
                        commandId: "Edit.MoveSelectedLinesUp",
                        command: "Alt+Up Arrow",
                    },
                    {
                        id: VSCODE,
                        name: "Move line up",
                        commandId: "?",
                        command: "Alt+Up Arrow",
                    }
                ]
            },
            {
                name: "Move line up",
                favorite: true,
                ides: [
                    {
                        id: VS2022,
                        name: "Move selected lines down",
                        commandId: "Edit.MoveSelectedLinesDown",
                        command: "Alt+Up Arrow",
                    },
                    {
                        id: VSCODE,
                        name: "Move line up",
                        commandId: "?",
                        command: "Alt+Up Arrow",
                    }
                ]
            },
            {
                name: "Copy Line Up",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Copy Line Up",
                        commandId: "?",
                        command: "Shift+Alt+Up Arrow",
                    }
                ]
            },
            {
                name: "Delete line",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Delete line",
                        commandId: "?",
                        command: "Ctrl+Shift+K",
                    }
                ]
            },
            {
                name: "Insert line below",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Insert line below",
                        commandId: "?",
                        command: "Ctrl+Enter",
                    }
                ]
            },
            {
                name: "Insert line above",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Insert line above",
                        commandId: "?",
                        command: "Ctrl+Shift+Enter",
                    }
                ]
            },
            {
                name: "Jump to matching bracket",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Jump to matching bracket",
                        commandId: "?",
                        command: "Ctrl+Shift+\\",
                    }
                ]
            },
            {
                name: "Indent line",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Indent line",
                        commandId: "?",
                        command: "Ctrl+]",
                    }
                ]
            },
            {
                name: "outdent line",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "outdent line",
                        commandId: "?",
                        command: "Ctrl+[",
                    }
                ]
            },
            {
                name: "Go to beginning of line ",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Go to beginning of line ",
                        commandId: "?",
                        command: "Home",
                    }
                ]
            },
            {
                name: "Go to end of line",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Go to end of line",
                        commandId: "?",
                        command: "End",
                    }
                ]
            },
            {
                name: "Go to beginning of file",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Go to beginning of file",
                        commandId: "?",
                        command: "Ctrl+Home",
                    }
                ]
            },
            {
                name: "Go to end of file",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Go to end of file",
                        commandId: "?",
                        command: "Ctrl+End",
                    }
                ]
            },
            {
                name: "Scroll line up",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Scroll line up",
                        commandId: "?",
                        command: "Ctrl+Up Arrow",
                    }
                ]
            },
            {
                name: "Scroll line down",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Scroll line down",
                        commandId: "?",
                        command: "Ctrl+Down Arrow",
                    }
                ]
            },
            {
                name: "Scroll page up",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Scroll page up",
                        commandId: "?",
                        command: "Alt+PgUp",
                    }
                ]
            },
            {
                name: "Scroll page down",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Scroll page down",
                        commandId: "?",
                        command: "Alt+PgDown",
                    }
                ]
            },
            {
                name: "Fold (collapse) region",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Fold (collapse) region",
                        commandId: "?",
                        command: "Ctrl+Shift+[",
                    }
                ]
            },
            {
                name: "Unfold (uncollapse) region ",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Unfold (uncollapse) region ",
                        commandId: "?",
                        command: "Ctrl+Shift+]",
                    }
                ]
            },
            {
                name: "Fold (collapse) all subregions",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Fold (collapse) all subregions",
                        commandId: "?",
                        command: "Ctrl+K, Ctrl+[",
                    }
                ]
            },
            {
                name: "Unfold (collapse) all subregions ",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Unfold (collapse) all subregions ",
                        commandId: "?",
                        command: "Ctrl+K, Ctrl+]",
                    }
                ]
            },
            {
                name: "Fold (collapse) all regions",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Fold (collapse) all regions",
                        commandId: "?",
                        command: "Ctrl+K, Ctrl+0",
                    }
                ]
            },
            {
                name: "Unfold (collapse) all regions",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Unfold (collapse) all regions",
                        commandId: "?",
                        command: "Ctrl+K, Ctrl+J",
                    }
                ]
            },
            {
                name: "Add line comment",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Add line comment",
                        commandId: "?",
                        command: "Ctrl+K, Ctrl+C",
                    }
                ]
            },
            {
                name: "Remove line comment ",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Remove line comment ",
                        commandId: "?",
                        command: "Ctrl+K, Ctrl+U",
                    }
                ]
            },
            {
                name: "Toggle line comment",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Toggle line comment",
                        commandId: "?",
                        command: "Ctrl+/",
                    }
                ]
            },
            {
                name: "Toggle block comment",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Toggle block comment",
                        commandId: "?",
                        command: "Alt+Z",
                    }
                ]
            },
            {
                name: "Toggle word wrap",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Toggle word wrap",
                        commandId: "?",
                        command: "Alt+Z",
                    }
                ]
            }
        ]
    },
    {
        section: "navigation",
        name: "Navigation",
        commands: [
            {
                name: "Go to",
                favorite: true,
                ides: [
                    {
                        id: VS2022,
                        name: "Go to",
                        commandId: "Edit.GoTo",
                        command: "Ctrl+G",
                    },
                    {
                        id: VSCODE,
                        name: "Go to Line...",
                        commandId: "?",
                        command: "Ctrl+G",
                    }
                ]
            },
            {
                name: "Navigate backward",
                favorite: true,
                ides: [
                    {
                        id: VS2022,
                        name: "Navigate backward",
                        commandId: "View.NavigateBackward",
                        command: "Ctrl+- ",
                    },
                    {
                        id: VSCODE,
                        name: "Go back",
                        commandId: "?",
                        command: "Alt+Left",
                    }
                ]
            },
            {
                name: "Navigate forward",
                favorite: true,
                ides: [
                    {
                        id: VS2022,
                        name: "Navigate forward",
                        commandId: "View.NavigateForward",
                        command: "Ctrl+Shirt+-",
                    },
                    {
                        id: VSCODE,
                        name: "Go forward",
                        commandId: "?",
                        command: "Alt+Right",
                    }
                ]
            },
            {
                name: "Go to declaration",
                favorite: true,
                ides: [
                    {
                        id: VS2022,
                        name: "Go to declaration",
                        commandId: "Edit.GoToDeclaration",
                        command: "Ctrl+F12",
                    }
                ]
            },
            {
                name: "Go to definition ",
                favorite: true,
                ides: [
                    {
                        id: VS2022,
                        name: "Go to definition",
                        commandId: "Edit.GoToDefinition",
                        command: "F12",
                    }
                ]
            },
            {
                name: "Find",
                favorite: true,
                ides: [
                    {
                        id: VS2022,
                        name: "Find",
                        commandId: "Edit.Find",
                        command: "Ctrl+F",
                    }
                ]
            },
            {
                name: "Find all references",
                favorite: true,
                ides: [
                    {
                        id: VS2022,
                        name: "Find all references",
                        commandId: "Edit.FindAllReferences",
                        command: "Shift+F12",
                    }
                ]
            },
            {
                name: "Find in files",
                favorite: true,
                ides: [
                    {
                        id: VS2022,
                        name: "Find in files",
                        commandId: "Edit.FindinFiles",
                        command: "Ctrl+Shift+F",
                    }
                ]
            }
        ]
    },
    {
        section: "search",
        name: "Search and replace",
        commands: [
            {
                name: "Toggle outlining expansion",
                favorite: true,
                ides: [
                    {
                        id: VS2022,
                        name: "Toggle outlining expansion",
                        commandId: "Edit.ToggleOutliningExpansion",
                        command: "Ctrl+M, Ctrl+M",
                    }
                ]
            },
            {
                name: "Add selection to next Find match",
                favorite: true,
                ides: [
                    {
                        id: VSCODE,
                        name: "Add selection to next Find match",
                        commandId: "?",
                        command: "Ctrl+D",
                    }
                ]
            }
        ]
    },
    {
        section: "refactor",
        name: "Refactor",
        commands: [
            {
                name: "Rename",
                favorite: true,
                ides: [
                    {
                        id: VSCODE,
                        name: "Rename",
                        commandId: "Refactor.Rename",
                        command: "Ctrl+R, Ctrl+R",
                    }
                ]
            },
            {
                name: "Extract method",
                favorite: true,
                ides: [
                    {
                        id: VSCODE,
                        name: "Extract method",
                        commandId: "Refactor.ExtractMethod",
                        command: "Ctrl+R, Ctrl+M",
                    }
                ]
            },
            {
                name: "Clean Using C#",
                favorite: true,
                ides: [
                    {
                        id: VSCODE,
                        name: "?? Clean Using C#",
                        commandId: "??",
                        command: "Ctrl+R, Ctrl+G",
                    }
                ]
            }
        ]
    },
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