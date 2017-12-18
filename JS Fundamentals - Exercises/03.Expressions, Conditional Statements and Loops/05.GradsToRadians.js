function gradsToRadians([grads]) {
    grads = Number(grads) % 400;
    let degrees = grads < 0 ? 400 + grads : grads;
    console.log(degrees * 360 / 400);
}
gradsToRadians(['100']);
gradsToRadians(['400']);
gradsToRadians(['850']);
gradsToRadians(['-50']);