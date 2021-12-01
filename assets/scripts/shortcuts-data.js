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
                    },
                    {
                        id: VSCODE,
                        name: "Find",
                        commandId: "Edit.Find",
                        command: "Ctrl+F",
                    }
                ]
            },
            {
                name: "Replace",
                favorite: true,
                ides: [
                    {
                        id: VS2022,
                        name: "Replace",
                        commandId: "?",
                        command: "Ctrl+H",
                    },
                    {
                        id: VSCODE,
                        name: "Find",
                        commandId: "?",
                        command: "Ctrl+H",
                    }
                ]
            },
            {
                name: "Find Next",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Find next",
                        commandId: "?",
                        command: "F3",
                    }
                ]
            },
            {
                name: "Find previous",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Find previous",
                        commandId: "?",
                        command: "Shift+F3",
                    }
                ]
            },
            {
                name: "Select all occurrences of Find match",
                favorite: true,
                ides: [
                    {
                        id: VSCODE,
                        name: "Select all occurrences of Find match",
                        commandId: "?",
                        command: "Alt+Enter",
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
            },
            {
                name: "Move last selection to next Find match",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Move last selection to next Find match",
                        commandId: "?",
                        command: "Ctrl+K Ctrl+D",
                    }
                ]
            },
            {
                name: "Toggle case-sensitive",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Toggle case-sensitive",
                        commandId: "?",
                        command: "Alt+C",
                    }
                ]
            },
            {
                name: "Toggle regex",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Toggle regex",
                        commandId: "?",
                        command: "Alt+R",
                    }
                ]
            },
            {
                name: "Toggle whole word",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Toggle whole word",
                        commandId: "?",
                        command: "Alt+W",
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
            }
        ]
    },
    {
        section: "multicursor",
        name: "Multi-cursor and selection",
        commands: [
            {
                name: "Insert cursor",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Insert cursor",
                        commandId: "?",
                        command: "Alt+Click",
                    }
                ]
            },
            {
                name: "Insert cursor above",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Insert cursor above",
                        commandId: "?",
                        command: "Ctrl+Alt+\u21E7",
                    }
                ]
            },
            {
                name: "Insert cursor below",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Insert cursor below",
                        commandId: "?",
                        command: "Ctrl+Alt+\u21E9",
                    }
                ]
            },
            {
                name: "Undo last cursor operation",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Undo last cursor operation",
                        commandId: "?",
                        command: "Ctrl+U",
                    }
                ]
            },
            {
                name: "Insert cursor at end of each line selected",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Insert cursor at end of each line selected",
                        commandId: "?",
                        command: "Shift+Alt+I",
                    }
                ]
            },
            {
                name: "Select current line",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Select current line",
                        commandId: "?",
                        command: "Ctrl+L",
                    }
                ]
            },
            {
                name: "Select all occurrences of current selection",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Select all occurrences of current selection",
                        commandId: "?",
                        command: "Ctrl+Shift+L",
                    }
                ]
            },
            {
                name: "Select all occurrences of current word",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Select all occurrences of current word",
                        commandId: "?",
                        command: "Ctrl+F2",
                    }
                ]
            },
            {
                name: "Expand selection",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Expand selection",
                        commandId: "?",
                        command: "Shift+Alt+\u21E8",
                    }
                ]
            },
            {
                name: "Shrink selection",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Shrink selection",
                        commandId: "?",
                        command: "Shift+Alt+\u21E6",
                    }
                ]
            },
            {
                name: "Column (box) selection",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Column (box) selection",
                        commandId: "?",
                        command: "Shift+Alt+(drag mouse)",
                    }
                ]
            },
            {
                name: "Column (box) selection",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Column (box) selection",
                        commandId: "?",
                        command: "Ctrl+Shift+Alt+(arrow key)",
                    }
                ]
            },
            {
                name: "Column (box) selection page up",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Column (box) selection page up",
                        commandId: "?",
                        command: "Ctrl+Shift+Alt+PgUp",
                    }
                ]
            },
            {
                name: "Column (box) selection page down",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Column (box) selection page down",
                        commandId: "?",
                        command: "Ctrl+Shift+Alt+PgDn",
                    }
                ]
            }
        ]
    },
    {
        section: "rich-language",
        name: "Rich Languages Editing",
        commands: [
            {
                name: "Trigger suggestion",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Trigger suggestion",
                        commandId: "?",
                        command: "Click+Space Ctrl+I",
                    }
                ]
            },
            {
                name: "Trigger parameter hints",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Trigger parameter hints",
                        commandId: "?",
                        command: "Click+Shift+Space",
                    }
                ]
            },
            {
                name: "Format document",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Format document",
                        commandId: "?",
                        command: "Shift+Alt+F",
                    }
                ]
            },
            {
                name: "Format selection",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Format selection",
                        commandId: "?",
                        command: "Ctrl+K Ctrl+F",
                    }
                ]
            },
            {
                name: "Go to Definition",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Go to Definition",
                        commandId: "?",
                        command: "F12",
                    }
                ]
            },
            {
                name: "Peek Definition",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Peek Definition",
                        commandId: "?",
                        command: "Alt+F12",
                    }
                ]
            },
            {
                name: "Open Definition to the side",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Open Definition to the side",
                        commandId: "?",
                        command: "Click+K F12",
                    }
                ]
            },
            {
                name: "Quick Fix",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Quick Fix",
                        commandId: "?",
                        command: "Ctrl+.",
                    }
                ]
            },
            {
                name: "Show References",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Show References",
                        commandId: "?",
                        command: "Shift+F12",
                    }
                ]
            },
            {
                name: "Rename Symbol",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Rename Symbol",
                        commandId: "?",
                        command: "F2",
                    }
                ]
            },
            {
                name: "Trim trailing whitespace",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Trim trailing whitespace",
                        commandId: "?",
                        command: "Ctrl+K Ctrl+X",
                    }
                ]
            },
            {
                name: "Change file language",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Change file language",
                        commandId: "?",
                        command: "Click+K M",
                    }
                ]
            }
        ]
    },
    {
        section: "editorManagement",
        name: "Editor Management",
        commands: [
            {
                name: "Close Editor",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Close Editor",
                        commandId: "?",
                        command: "Ctrl+F4 or Ctrl+W",
                    }
                ]
            },
            {
                name: "Close folder",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Close folder",
                        commandId: "?",
                        command: "Ctrl+K F",
                    }
                ]
            },
            {
                name: "Split editor",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Split editor",
                        commandId: "?",
                        command: "Ctrl+\\"
                    }
                ]
            },
            {
                name: "Focus into 1st editor Group",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Focus into 1st editor Group",
                        commandId: "?",
                        command: "Ctrl+1"
                    }
                ]
            },
            {
                name: "Focus into 2nd editor Group",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Focus into 2nd editor Group",
                        commandId: "?",
                        command: "Ctrl+2"
                    }
                ]
            },
            {
                name: "Focus into 3rd editor Group",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Focus into 3rd editor Group",
                        commandId: "?",
                        command: "Ctrl+3"
                    }
                ]
            },
            {
                name: "Focus into previous editor group",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Focus into previous editor group",
                        commandId: "?",
                        command: "Ctrl+K Ctrl+\u21E6"
                    }
                ]
            },
            {
                name: "Focus into next editor group",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Focus into next editor group",
                        commandId: "?",
                        command: "Ctrl+K Ctrl+\u21E8"
                    }
                ]
            },
            {
                name: "Move editor left",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Move editor left",
                        commandId: "?",
                        command: "Ctrl+Shift+PgUp"
                    }
                ]
            },
            {
                name: "Move editor right",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Move editor right",
                        commandId: "?",
                        command: "Ctrl+Shift+PgDn"
                    }
                ]
            },
            {
                name: "Move active editor group",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Move active editor group",
                        commandId: "?",
                        command: "Ctrl+K \u21E6"
                    }
                ]
            },
            {
                name: "Move active editor group",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Move active editor group",
                        commandId: "?",
                        command: "Ctrl+K \u21E8"
                    }
                ]
            }
        ]
    },
    {
        section: "fileManagemnt",
        name: "File Management",
        commands: [
            {
                name: "New File",
                favorite: true,
                ides: [
                    {
                        id: VSCODE,
                        name: "New File",
                        commandId: "?",
                        command: "Ctrl+N",
                    }
                ]
            },
            {
                name: "Open File...",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Open File...",
                        commandId: "?",
                        command: "Ctrl+O",
                    }
                ]
            },
            {
                name: "Save",
                favorite: true,
                ides: [
                    {
                        id: VSCODE,
                        name: "Save",
                        commandId: "?",
                        command: "Ctrl+S",
                    }
                ]
            },
            {
                name: "Save As...",
                favorite: true,
                ides: [
                    {
                        id: VSCODE,
                        name: "Save As...",
                        commandId: "?",
                        command: "Ctrl+Shift+S",
                    }
                ]
            },
            {
                name: "Save All",
                favorite: true,
                ides: [
                    {
                        id: VSCODE,
                        name: "Save All",
                        commandId: "?",
                        command: "Ctrl+K S",
                    }
                ]
            },
            {
                name: "Close",
                favorite: true,
                ides: [
                    {
                        id: VSCODE,
                        name: "Close",
                        commandId: "?",
                        command: "Ctrl+F4",
                    }
                ]
            },
            {
                name: "Close All",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Close All",
                        commandId: "?",
                        command: "Ctrl+K Ctrl+W",
                    }
                ]
            },
            {
                name: "Reopen closed editor",
                favorite: true,
                ides: [
                    {
                        id: VSCODE,
                        name: "Reopen closed editor",
                        commandId: "?",
                        command: "Ctrl+Shift+T",
                    }
                ]
            },
            {
                name: "Keep preview mode editor open",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Keep preview mode editor open",
                        commandId: "?",
                        command: "Ctrl+K Enter",
                    }
                ]
            },
            {
                name: "Open next",
                favorite: true,
                ides: [
                    {
                        id: VSCODE,
                        name: "Open next",
                        commandId: "?",
                        command: "Ctrl+Tab",
                    }
                ]
            },
            {
                name: "Open previous",
                favorite: true,
                ides: [
                    {
                        id: VSCODE,
                        name: "Open previous",
                        commandId: "?",
                        command: "Ctrl+Shift+Tab",
                    }
                ]
            },
            {
                name: "Copy path of active file",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Copy path of active file",
                        commandId: "?",
                        command: "Ctrl+K P",
                    }
                ]
            },
            {
                name: "Reveal active file in Explorer",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Reveal active file in Explorer",
                        commandId: "?",
                        command: "Ctrl+K R",
                    }
                ]
            },
            {
                name: "Show active file in new window/instance",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Show active file in new window/instance",
                        commandId: "?",
                        command: "Ctrl+K O",
                    }
                ]
            }
        ]
    },
    {
        section: "display",
        name: "Display",
        commands: [
            {
                name: "Toggle Full screen",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Toggle Full screen",
                        commandId: "?",
                        command: "F11",
                    }
                ]
            },
            {
                name: "Toggle editor layout (horizontal/vertical)",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Toggle editor layout (horizontal/vertical)",
                        commandId: "?",
                        command: "Shift+Alt+0",
                    }
                ]
            },
            {
                name: "Zoom in",
                favorite: true,
                ides: [
                    {
                        id: VSCODE,
                        name: "Zoom in",
                        commandId: "?",
                        command: "Ctrl+=",
                    }
                ]
            },
            {
                name: "Zoom out",
                favorite: true,
                ides: [
                    {
                        id: VSCODE,
                        name: "Zoom out",
                        commandId: "?",
                        command: "Ctrl+-",
                    }
                ]
            },
            {
                name: "Toggle Sidebar visibility",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Toggle Sidebar visibility",
                        commandId: "?",
                        command: "Ctrl+B",
                    }
                ]
            },
            {
                name: "Show Explorer / Toggle focus",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Show Explorer / Toggle focus",
                        commandId: "?",
                        command: "Ctrl+Shift+E",
                    }
                ]
            },
            {
                name: "Show Search",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Show Search",
                        commandId: "?",
                        command: "Ctrl+Shift+F",
                    }
                ]
            },
            {
                name: "Show Source Control",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Show Source Control",
                        commandId: "?",
                        command: "Ctrl+Shift+G",
                    }
                ]
            },
            {
                name: "Show Debug",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Show Debug",
                        commandId: "?",
                        command: "Ctrl+Shift+D",
                    }
                ]
            },
            {
                name: "Show Extensions",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Show Extensions",
                        commandId: "?",
                        command: "Ctrl+Shift+X",
                    }
                ]
            },
            {
                name: "Replace in files",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Replace in files",
                        commandId: "?",
                        command: "Ctrl+Shift+H",
                    }
                ]
            },
            {
                name: "Toggle Search details",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Toggle Search details",
                        commandId: "?",
                        command: "Ctrl+Shift+J",
                    }
                ]
            },
            {
                name: "Show Output panel",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Show Output panel",
                        commandId: "?",
                        command: "Ctrl+Shift+U",
                    }
                ]
            },
            {
                name: "Open markdown preview",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Open markdown preview",
                        commandId: "?",
                        command: "Ctrl+Shift+V",
                    }
                ]
            },
            {
                name: "Open markdown preview to the side",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Open markdown preview to the side",
                        commandId: "?",
                        command: "Ctrl+K V",
                    }
                ]
            },
            {
                name: "Zen Mode (Esc Esc to exit",
                favorite: false,
                ides: [
                    {
                        id: VSCODE,
                        name: "Zen Mode (Esc Esc to exit",
                        commandId: "?",
                        command: "Ctrl+K Z",
                    }
                ]
            }
        ]
    },
    {
        section: "Debug",
        name: "Debug",
        commands: [
            {
                name: "Toggle breakpoint",
                favorite: true,
                ides: [
                    {
                        id: VSCODE,
                        name: "Toggle breakpoint",
                        commandId: "?",
                        command: "F9",
                    }
                ]
            },
            {
                name: "Start/Continue",
                favorite: true,
                ides: [
                    {
                        id: VSCODE,
                        name: "Start/Continue",
                        commandId: "?",
                        command: "F5",
                    }
                ]
            },
            {
                name: "Stop",
                favorite: true,
                ides: [
                    {
                        id: VSCODE,
                        name: "Stop",
                        commandId: "?",
                        command: "Shift+F5",
                    }
                ]
            },
            {
                name: "Step into",
                favorite: true,
                ides: [
                    {
                        id: VSCODE,
                        name: "Step into",
                        commandId: "?",
                        command: "F11",
                    }
                ]
            },
            {
                name: "Step out",
                favorite: true,
                ides: [
                    {
                        id: VSCODE,
                        name: "Step out",
                        commandId: "?",
                        command: "Shift+F11",
                    }
                ]
            },
            {
                name: "Step over",
                favorite: true,
                ides: [
                    {
                        id: VSCODE,
                        name: "Step over",
                        commandId: "?",
                        command: "F10",
                    }
                ]
            },
            {
                name: "Show hover",
                favorite: true,
                ides: [
                    {
                        id: VSCODE,
                        name: "Show hover",
                        commandId: "?",
                        command: "Ctrl+K Ctrl+I",
                    }
                ]
            }
        ]
    },,
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
    }
];

const columns = [
    {
        name: "Name of the IDE/Edit",
        class: "name",
        column: "name",
        shotName: "name"
    },
    {
        name: "Command Id of the IDE/Edit",
        class: "com",
        column: "commandId",
        shotName: "command id"
    },
    {
        name: "Keys of the IDE/Edit",
        class: "keys",
        column: "command",
        shotName: "keys"
    }
]

const IDEs = [
    { name: "visual studio 2022", id: VS2022 },
    { name: "visual studio code", id: VSCODE }
];


getClassName = (column, ide) => {
    const name =  column.class + "-ide-" + ide.id;
    return name;
}

// Generate table
(function() {
    const tables = document.querySelector("#tables");

    createSections = () => {
        for(let i=0; i < shortcuts.length; i++) {
            const title = document.createElement('h2');
            const table = document.createElement('table');
            const tableHead = createRowForHeader();
            const tableBody = createRowPerCommands(shortcuts[i].commands)           
            
            title.innerText = shortcuts[i].name;
            
            table.appendChild(tableHead);
            table.appendChild(tableBody);
            tables.appendChild(title);
            tables.appendChild(table);
        }
    }

    createRowForHeader = () => {
        const thead = document.createElement('thead');
        const tr = document.createElement('tr');
        thead.appendChild(tr);
        addDataToRow(thead, null, "th", (ide)=> ide.name);
        return thead;

    }

    createRowPerCommands = (commands) => {
        const tbody = document.createElement('tbody');
        for (let i = 0; i < commands.length; i++) {
            const tr = document.createElement('tr');
            tbody.appendChild(tr);
            addDataToRow(tr, commands[i], "td", getBodyCellText);
        }
        return tbody;
    }

    getBodyCellText = (ide, column, command) => {
        const idesKeys = command.ides.filter(x => x.id === ide.id);
        const ideKeys = idesKeys.length > 0 ? idesKeys[0] : null;
        const columnName = column.column;
        const cell =  ideKeys ? ideKeys[columnName] : "?";
        return cell;
    }

    addDataToRow = (tr, command, type, getText) => {
        for (let i = 0; i < IDEs.length; i++) {
            for (let j = 0; j < columns.length; j++) {
                const text = getText(IDEs[i], columns[j], command);
                const td = createCell(columns[j], IDEs[i], text, type);
                tr.appendChild(td);
            }
        }
    }

    createCell = (column, ide, text, type) => {
        const td = document.createElement(type);
        td.classList.add(getClassName(column, ide));
        td.appendChild(document.createTextNode(text));
        return td;  
    }
    
    createSections();
})();

// Generate Config
(function() {
    switchDisplay = (className, visible) => { 
        document.querySelectorAll("."+ className) .forEach((item) => {
            item.style.display = visible ? "table-cell" : "none";
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
        input.setAttribute('checked', 'checked');
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