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

<script src="/assets/scripts/shortcuts-data.js" />