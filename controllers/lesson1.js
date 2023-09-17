const jasonRoute = (req, res) => {
  res.send("Jason");
};

const emmaRoute = (req, res) => {
    res.send("Emma");
  }

module.exports = {
    jasonRoute,
    emmaRoute
}
    
