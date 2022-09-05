export default function (part) {
  const { options, Point, Path, points, paths, Snippet, snippets, measurements, complete, sa, paperless, macro } =
    part.shorthand()
	let tweak = 1
	let target = (measurements.head * options.topwidth) /4
	let delta
	do {
		points.right = new Point(tweak * measurements.head * options.topwidth/ 3.9, 0)
		points.bottom = new Point(0, tweak * measurements.head * options.topwidth/ 4)

		points.rightCp1 = points.right.shift(90, points.bottom.dy(points.right)/2)
		points.bottomCp2 = points.bottom.shift(0, points.bottom.dx(points.right)/2)

		paths.quarterTop = new Path()
		  .move(points.right)
		  .curve(points.rightCp1, points.bottomCp2, points.bottom)
		  .setRender(false)
		delta = paths.quarterTop.length() - target
	  if (delta > 0) tweak = tweak * 0.99
	  else tweak = tweak * 1.02
	} while (Math.abs(delta) > 1)

	points.rightCp2 = points.rightCp1.flipY()
	points.bottomCp1 = points.bottomCp2.flipX()

	points.left = points.right.flipX()
	points.leftCp1 = points.rightCp2.flipX()
	points.leftCp2 = points.rightCp1.flipX()

	points.top = points.bottom.flipY()
	points.topCp1 = points.bottomCp2.flipY()
	points.topCp2 = points.bottomCp1.flipY()

	paths.top = new Path()
	  .move(points.top)
	  .curve(points.topCp2, points.leftCp1, points.left)
	  .curve(points.leftCp2, points.bottomCp1, points.bottom)
	  .curve(points.bottomCp2, points.rightCp1, points.right)
	  .curve(points.rightCp2, points.topCp1, points.top)
	  .close()


  // Complete?
  if (complete) {
/*    points.logo = points.topLeft.shiftFractionTowards(points.bottomRight, 0.5)
    snippets.logo = new Snippet('logo', points.logo)
    points.text = points.logo
      .shift(-90, w / 8)
      .attr('data-text', 'hello')
      .attr('data-text-class', 'center')
*/
    if (sa) {
 //     paths.sa = paths.seam.offset(sa).attr('class', 'fabric sa')
    }
  }

  // Paperless?
  if (paperless) {
/*    macro('hd', {
      from: points.bottomLeft,
      to: points.bottomRight,
      y: points.bottomLeft.y + sa + 15,
    })
    macro('vd', {
      from: points.bottomRight,
      to: points.topRight,
      x: points.topRight.x + sa + 15,
    })
*/  }

  return part
}
