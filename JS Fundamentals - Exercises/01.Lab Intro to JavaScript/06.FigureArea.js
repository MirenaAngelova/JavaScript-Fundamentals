function figureArea([w, h, W, H]) {
    w = Number(w);
    h = Number(h);
    W = Number(W);
    H = Number(H);

    let [s1, s2, s3] = [w * h, W * H, Math.min(w, W) * Math.min(h, H)];
    console.log(s1 + s2 - s3);
}
figureArea(['2', '4', '5', '3']);
figureArea(['13', '2', '5', '8']);