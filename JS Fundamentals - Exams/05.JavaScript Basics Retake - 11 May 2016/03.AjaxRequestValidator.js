function ajaxRequestValidator(ajaxData) {
    let [hashPattern, requests] = [ajaxData.pop().split(''), ajaxData];

    function isValidAuthenticationToken(token, hash) {
        token = token.split('');
        for (let i = 0; i < hash.length; i += 2) {
            let timesAmount = Number(hash[i]);
            let ch = hash[i + 1];
            if (timesAmount == token.filter(t => t == ch).length) {
                return true;
            }
        }
        return false;
    }

    for (let i = 0; i < requests.length; i += 3) {
        let method = requests[i];
        let credentials = requests[i + 1];
        let content = requests[i + 2];

        if (/^Method:\s(GET|POST|PUT|DELETE)$/.test(method) &&
            /^Credentials:\s(Basic|Bearer)\s([A-Za-z0-9]+)$/.test(credentials) &&
            /^Content:\s([A-Za-z0-9\.]+)$/.test(content)
        ) {
            let methodType = method.match(/^Method:\s(GET|POST|PUT|DELETE)$/)[1];
            let [credentialsType, authenticationToken] =
            credentials.match(/^Credentials:\s(Basic|Bearer)\s([A-Za-z0-9]+)$/)
                .filter((v, i) => i > 0);
            if (methodType != 'GET' && credentialsType == 'Basic') {
                console.log(`Response-Method:${methodType}&Code:401`);
                continue;
            }
            if (!isValidAuthenticationToken(authenticationToken, hashPattern)) {
                console.log(`Response-Method:${methodType}&Code:403`);
                continue;
            }
            console.log(`Response-Method:${methodType}&Code:200&Header:${authenticationToken}`);
        } else {
            console.log('Response-Code:400');
        }
    }
}
ajaxRequestValidator(['Method: GET',
    'Credentials: Bearer asd918721jsdbhjslkfqwkqiuwjoxXJIdahefJAB',
    'Content: users.asd.1782452.278asd',
    'Method: POST',
    'Credentials: Basic 028591u3jtndkgwndsdkfjwelfqkjwporjqebhas',
    'Content: Johnathan',
    '2q'
]);
ajaxRequestValidator(['Method: PUT',
    'Credentials: Bearer as9133jsdbhjslkfqwkqiuwjoxXJIdahefJAB',
    'Content: users.asd/1782452$278///**asd123',
    'Method: POST',
    'Credentials: Bearer 028591u3jtndkgwndskfjwelfqkjwporjqebhas',
    'Content: Johnathan',
    'Method: DELETE',
    'Credentials: Bearer 05366u3jtndkgwndssfsfgeryerrrrrryjihvx',
    'Content: This.is.a.sample.content',
    '2e5g'
]);