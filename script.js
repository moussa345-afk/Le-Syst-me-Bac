document.addEventListener("click",function(e){document.querySelectorAll("details.buy[open]").forEach(function(d){if(!d.contains(e.target))d.open=false})});
