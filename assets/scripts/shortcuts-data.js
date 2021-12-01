const VS2022 = "vs2022";
const VSCODE = "vscode";

const nameIndex = 1;
const commandIdIndex = 2;
const commandIndex = 3;
const cols = 3;

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
                        command: "Ctrl+Shift+P or F1",
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
                        command: "Alt+\u21E7",
                    },
                    {
                        id: VSCODE,
                        name: "Move line up",
                        commandId: "?",
                        command: "Alt+\u21E7",
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
                        command: "Alt+\u21E9",
                    },
                    {
                        id: VSCODE,
                        name: "Move line down",
                        commandId: "?",
                        command: "Alt+\u21E9",
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
                        command: "Shift+Alt+\u21E7",
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
                        command: "Ctrl+\u21E7",
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
                        command: "Ctrl+\u21E9",
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
                        command: "Shift+Alt+Z",
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
                name: "Show all Symbols",
                favorite: false,
                ides: [
                                        {
                        id: VSCODE,
                        name: "Show all Symbols",
                        commandId: "?",
                        command: "Ctrl+T",
                    }
                ]
            },
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
                name: "Go to File",
                favorite: true,
                ides: [
                    {
                        id: VSCODE,
                        name: "Go to File...",
                        commandId: "?",
                        command: "Ctrl+P",
                    }
                ]
            },
            {
                name: "Go to Symbol",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Go to Symbol...",
                        commandId: "?",
                        command: "Ctrl+Shift+O",
                    }
                ]
            },
            {
                name: "Show Problems panel",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Show Problems panel",
                        commandId: "?",
                        command: "Ctrl+Shift+M",
                    }
                ]
            },
            {
                name: "Go to next error or warning",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Go to next error or warning",
                        commandId: "?",
                        command: "F8",
                    }
                ]
            },
            {
                name: "Go to previous error or warning",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Go to previous error or warning",
                        commandId: "?",
                        command: "Shift+F8",
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
            }
        ]
    },
    {
        section: "search",
        name: "Search and replace",
        commands: [
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
            },
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
    { name: "visual studio 2022", class:"vs2022", id: VS2022 },
    { name: "visual studio code", class:"vscode", id: VSCODE }
];


getClassName = (column, ide) => {
    const name =  column.class + "-" + ide.class;
    console.log(name);
    return name;
}

// Generate table
(function() {
    const tables = document.querySelector("#tables");

    function createSections() {
        for(let i=0; i < shortcuts.length; i++) {
            const title = document.createElement('h2');
            const table = document.createElement('table');
            const tableHead = document.createElement('thead');
            const tableBody = document.createElement('tbody');
            
            title.innerText = shortcuts[i].name;
            createHeader(tableHead);
            createRowPerCommands(shortcuts[i].commands, tableBody)
            
            table.appendChild(tableHead);
            table.appendChild(tableBody);
            tables.appendChild(title);
            tables.appendChild(table);
        }
    }

    // create header
    function createHeader(tableHead) {
        const tr = document.createElement('tr');
        tableHead.appendChild(tr);
        for (let iide = 0; iide < IDEs.length; iide++) {
            for (let ic = 0; ic < columns.length; ic++) {
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
            const idesKeys = command.ides.filter(x => x.id === IDEs[iide].id);
            const ideKeys = idesKeys.length > 0 ? idesKeys[0] : null;

            for (let ic = 0; ic < columns.length; ic++) {
                const td = createCell(ideKeys, columns[ic], IDEs[iide]);
                tr.appendChild(td);
            }
        }
    }

    function createCell(ideKeys, columnItem, ide) {
        const columnName = columnItem.column;
        const cell =  ideKeys ? ideKeys[columnName] : "?";
        const td = document.createElement('td');

        td.classList.add(`${columnName}-ide-${ide.class}`);
        td.appendChild(document.createTextNode(`${cell}`));
        return td;  
    }

    
    createSections();
})();

// Generate Config
(function() {
    switchDisplay = (className, visible) => { 
        document.querySelectorAll("."+ className) .forEach((item) => {
            item.style.display = visible ? "none" : "table-cell";
        });
    }  

    createHideConfigHeader = () => {
        const configRow = document.querySelector("#config-th");
        for (let i = 0; i < columns.length; i++) {
            const td = document.createElement('td');
            td.appendChild(document.createTextNode(`${columns[i].name}`));
            configRow.appendChild(td);
        }
    
    }
    
    createHideConfig = (IDE) => {
        const configTable = document.querySelector("#config-tb");
        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        tdName.appendChild(document.createTextNode(`${IDE.name}`));
        tr.appendChild(tdName);
        configTable.appendChild(tr);

        for (let i = 0; i < columns.length; i++) {
            const label = createCheckbox(getClassName(columns[i], IDE));
            const td = document.createElement('td');
            td.appendChild(label);
            tr.appendChild(td);
        }
    }

    createCheckbox = (className) => {
        const label = document.createElement('label');
        const span = document.createElement('span');     
        span.className = "slider round";
        label.className = "switch";
        label.appendChild(createInputCheckbox(className));
        label.appendChild(span);

        return label;
    }

    createInputCheckbox = (className) => {
        const input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.addEventListener('click', (e, i) => {
            switchDisplay(className, input.checked)
        });
        
        return input;
    }

    for(let i =0; i < IDEs.length; i++) {
        createHideConfig(IDEs[i]);
    }
    
    createHideConfigHeader();
})();