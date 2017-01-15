
function randomFunc() { }
randomFunc.prototype = {
    random2: function(num) { return this.random(num, 2) },
    random3: function(num) { return this.random(num, 3) },
    random: function(num, 回数) {
        var retval = random(num)
        for(var cnt=0; cnt<回数; cnt++) {
            retval = retval + random(num)
        }

        retval = retval / 回数
        // console.log(retval)

        return retval
    },
}