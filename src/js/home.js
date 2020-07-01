const home = function () {
    const content = document.getElementById('content');
    
    function topHeader() {

    }

    function catalog() {

    }
  
    function render() {
        topHeader();
        catalog();
    }
  
    return {
      topHeader,
      catalog,
      render,

    };
  };
  
  export { home };