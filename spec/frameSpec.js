describe("Frame", function() {
  it("begins with a total of zero", function() {
    let frameOne = new Frame()
    expect(frameOne.total).toEqual(0)
  })
})