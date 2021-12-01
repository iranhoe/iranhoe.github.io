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
  width: 40px;
  height: 24px;
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
  height: 16px;
  width: 16px;
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
  -webkit-transform: translateX(16px);
  -ms-transform: translateX(16px);
  transform: translateX(16px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 14px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>

## Config Columns 
<table>
    <thead>
        <tr id="config-th">
            <td>Nombre</td>
        </tr>
    </thead>
    <tbody id="config-tb"></tbody>
</table>


## Code 

- &#8679; = Arrow Up
- &#8681; = Arrow Down
- &#8678; = Arrow Left 
- &#8680; = Arrow Right

<div id="tables"></div>

<script src="/assets/scripts/shortcuts-data.js" />