---
layout: post
category: devblog
title: "Shortcuts"
---

<style>
  /* .main-content {
    padding: 3rem 0rem;
  } */

  .hide-com {
      display: none;
  }

  .hide-name {
      display: none;
  }

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>

## Config Columns 
<label class="switch">
  <input id="com-switch" type="checkbox" />
  <span class="slider round"></span>
</label> Hide Command Id

<label class="switch">
  <input id="name-switch" type="checkbox" />
  <span class="slider round"></span>
</label> Hide Name

## Config IDE/Editor

<label class="switch">
  <input id="ide-vs2022" type="checkbox" value="true" />
  <span class="slider round"></span>
</label> Hide VS2022

<label class="switch">
  <input id="ide-vscode" type="checkbox" value="true" />
  <span class="slider round"></span>
</label> Hide VSCode

<div id="tables"></div>

## General

| VS2022 Name   | VS2022 Command Id | VS2022            | VSCode Name               | VSCode Command Id | VSCode                |
| ------------- |:-----------------:|:-----------------:| ------------------------- | ----------------- |:---------------------:|
|               |                   |                   | Show Command Palette      |                   | Ctrl+Shift+P or F1    |
| Navigate to   | Edit.NavigateTo   | Ctrl+,            | Quick Open, Go to File…   |                   | Ctrl+P                |
|               |                   |                   | New window/instance       |                   | Ctrl+Shift+N          |
|               |                   |                   | Close window/instance     |                   | Ctrl+Shift+W          |
|               |                   |                   | User Settings             |                   | Ctrl+,                |
|               |                   |                   | Keyboard Shortcuts        |                   | Ctrl+K Ctrl+S         |

## Basic Edit

| VS2022 Name                   | VS2022 Command Id             | VS2022            | VSCode Name                       | VSCode Command Id | VSCode                |
| ----------------------------- |:-----------------------------:|:-----------------:| --------------------------------- | ----------------- |:---------------------:|
|                               |                               |                   | Cut line (empty selection)        |                   | Ctrl+X                |
|                               |                               |                   | Copy Line (empty selection)       |                   | Ctrl+C                |
| Move selected lines up        | Edit.MoveSelectedLinesUp      | Alt+Up Arrow      | Move line up                      |                   | Alt+Up Arrow          |
| Move selected lines down      | Edit.MoveSelectedLinesDown    | Alt+Down Arrow    | Move line down                    |                   | Alt+Down Arrow        |
|                               |                               |                   | Copy Line Up                      |                   | Shift+Alt+Up Arrow    |
|                               |                               |                   | Delete line                       |                   | Ctrl+Shift+K          |
|                               |                               |                   | Insert line below                 |                   | Ctrl+Enter            |
|                               |                               |                   | Insert line above                 |                   | Ctrl+Shift+Enter      |
|                               |                               |                   | Jump to matching bracket          |                   | Ctrl+Shift+\          |
|                               |                               |                   | Indent line                       |                   | Ctrl+]                |
|                               |                               |                   | outdent line                      |                   | Ctrl+[                |
|                               |                               |                   | Go to beginning of line           |                   | Home                  |
|                               |                               |                   | Go to end of line                 |                   | End                   |
|                               |                               |                   | Go to beginning of file           |                   | Ctrl+Home             |
|                               |                               |                   | Go to end of file                 |                   | Ctrl+End              |
|                               |                               |                   | Scroll line up                    |                   | Ctrl+Up Arrow         |
|                               |                               |                   | Scroll line down                  |                   | Ctrl+Down Arrow       |
|                               |                               |                   | Scroll page up                    |                   | Alt+PgUp              |
|                               |                               |                   | Scroll page down                  |                   | Alt+PgDown            |
|                               |                               |                   | Fold (collapse) region            |                   | Ctrl+Shift+[          |
|                               |                               |                   | Unfold (uncollapse) region        |                   | Ctrl+Shift+]          |
|                               |                               |                   | Fold (collapse) all subregions    |                   | Ctrl+K, Ctrl+[        |
|                               |                               |                   | Unfold (collapse) all subregions  |                   | Ctrl+K, Ctrl+]        |
|                               |                               |                   | Fold (collapse) all regions       |                   | Ctrl+K, Ctrl+0        |
|                               |                               |                   | Unfold (collapse) all regions     |                   | Ctrl+K, Ctrl+J        |
|                               |                               |                   | Add line comment                  |                   | Ctrl+K, Ctrl+C        |
|                               |                               |                   | Remove line comment               |                   | Ctrl+K, Ctrl+U        |
|                               |                               |                   | Toggle line comment               |                   | Ctrl+/                |
|                               |                               |                   | Toggle block comment              |                   | Shift+Alt+A           |
|                               |                               |                   | Toggle word wrap                  |                   | Alt+Z                 |

## Navigation

| VS2022 Name                   | VS2022 Command Id             | VS2022            | VSCode Name                       | VSCode Command Id | VSCode    |
| ----------------------------- |:-----------------------------:|:-----------------:| --------------------------------- |:-----------------:|:---------:|
| Go to                         | Edit.GoTo                     | Ctrl+G            | Go to Line...                     |                   | Ctrl+G    |
| Navigate backward             | View.NavigateBackward         | Ctrl+-            | Go back                           |                   | Alt+Left  |
| Navigate forward              | View.NavigateForward          | Ctrl+Shirt+-      | Go forward                        |                   | Alt+Right |
| Go to declaration             | Edit.GoToDeclaration          | Ctrl+F12          |                                   |                   |           |
| Go to definition              | Edit.GoToDefinition           | F12               |                                   |                   |           |
| Find                          | Edit.Find                     | Ctrl+F            |                                   |                   |           |
| Find all references           | Edit.FindAllReferences        | Shift+F12         |                                   |                   |           |
| Find in files                 | Edit.FindinFiles              | Ctrl+Shift+F      |                                   |                   |           |

## Search adn replace

| VS2022 Name                   | VS2022 Command Id             | VS2022            | VSCode Name                       | VSCode    |
| ----------------------------- |:-----------------------------:|:-----------------:| --------------------------------- |:---------:|
|                               |                               |                   | Add selection to next Find match  | Ctrl+D    |
| Toggle outlining expansion    | Edit.ToggleOutliningExpansion | Ctrl+M, Ctrl+M    |                                   |           |

## Refactor

| VS2022 Name                   | VS2022 Command Id             | VS2022            | VSCode Name                       | VSCode Command Id | VSCode    |
| ----------------------------- |:-----------------------------:|:-----------------:| --------------------------------- | ----------------- |:---------:|
| Rename                        | Refactor.Rename               | Ctrl+R, Ctrl+R    |                                   |                   |           |
| Extract method                | Refactor.ExtractMethod        | Ctrl+R, Ctrl+M    |                                   |                   |           |
|                               |                               | Ctrl+R, Ctrl+G    |                                   |                   |           |

<script src="/assets/scripts/shortcuts-data.js" />