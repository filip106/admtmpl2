document.addEventListener("DOMContentLoaded", function () {
    // initialize menu item dropdown
    var coll = document.getElementsByClassName("main-sidemenu__menu-item");
    var i;
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            console.log('test123')
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content && content.classList && content.classList.contains('main-sidemenu__menu-item-dropdown')) {
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            }
        });
    }

    // dropdown triggers
    var elems = document.querySelectorAll('.dropdown-trigger');
    var dropDownOptions = {};
    var instances = M.Dropdown.init(elems, dropDownOptions);
});