var ayın_gunleri = [0, 31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function subat(yıl) {
    if (yıl % 4 != 0) return 28;
    if (yıl % 100 == 0 && yıl % 400 != 0) return 28;
    return 29;
}
function pazarısay() {
    var gun = 1;
    var toplampazar = 0;
    for (var ay = 0; ++ay < 13;) {
        gun += (ay == 2) ? subat(1900) : ayın_gunleri[ay];
    }
    for (var yıl = 1900; ++yıl < 2001;) {    
        for (ay = 0; ++ay < 13;) {
            if (gun % 7 == 0) toplampazar++;
            gun += (ay == 2) ? subat(yıl) : ayın_gunleri[ay];
        }
    }
    return toplampazar;
}



