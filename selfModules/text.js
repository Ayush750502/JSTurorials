
exports.htmltext = function(port){
    let hwl = `
<div>
    <h1>Hello World!</h1>
    <form action='http://127.0.0.1:${port}'>
    <label for='value'>Enter some value:- </label>
    <input name='value1' placeholder='bla-bla-bla' value='bla-bla-bla'><br>
    <label for='value'>Enter some value:- </label>
    <input name='value2' placeholder='bla-bla-bla' value='bla-bla-bla'><br>
    <button type="submit">Submit your answer!</button>
    </form>
</div>
`;
    return hwl;
}
