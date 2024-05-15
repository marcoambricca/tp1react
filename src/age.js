(function() {
    window.addEventListener('load', () => {
        document.getElementById("age").innerHTML= getAge("2006/10/18")
    });

    /**
     * Function gets called when page is loaded.
     */
    function getAge(dateParam) {
        const today = new Date();
        const birthDate = new Date(dateParam);
        const m = today.getMonth() - birthDate.getMonth();
        let age = today.getFullYear() - birthDate.getFullYear();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age
    }

})();