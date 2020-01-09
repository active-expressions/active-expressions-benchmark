export default function createRectangle(width = 10, height = 20) {
  return {
    width,
    height,
    area() {
        return this.width * this.height;
    },
    aspectRatio() {
        return this.width / this.height;
    }
  }
}