module.exports = towelSort = (array = []) => {
    const b = [];
    array.forEach((item, index) =>
        index % 2 === 0 ? b.push(...item) : b.push(...item.reverse())
    );

    return b;
}
