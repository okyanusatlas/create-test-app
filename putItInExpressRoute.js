/* GET users listing. */
router.get('/', function(req, res, next) {
    try {
        const filePath = __dirname +"\\config.yaml";
        console.log("filepath", filePath);

        const doc = yaml.safeLoad(fs.readFileSync(filePath, 'utf8'));
        console.log(Object.keys(doc).forEach(x => console.log("Key:", x)));
    } catch (e) {
        console.log("ERRRRR");
        console.log(e);
    }
});
