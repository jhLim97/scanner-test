

const scanner = (req, res) => {
    console.log('/ 패스로 GET 요청됨.');

    //res.render('scanner');
    res.render('attendanceTest');//테스트 중
    //res.render('faceRecognitionTest');
    //res.render('test');
    //res.render('testByOpencv');
}

module.exports.scanner = scanner;