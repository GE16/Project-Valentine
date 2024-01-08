server.get("/", (request, response) => {
    response.render("sunflower", { 
        message: "Welcome in Express !" 
    });
});