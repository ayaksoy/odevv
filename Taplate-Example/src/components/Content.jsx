import React from "react";

export default function Content() {
	return (
		<div className="content">
			<section className="container-fluid">
				<div className="row">
					<div className="col-portfolio col-sm-6 col-lg-4">
						<a
							href="http://paul-themes.com/html/selena/demo/index.html"
							title="Stationery Design"
						>
							<figure className="showcase-item">
								<div className="showcase-item-thumbnail">
									<img alt="" src="img/demo1.jpg" />
								</div>
								<figcaption className="showcase-item-hover">
									<div className="showcase-item-info">
										<div className="showcase-item-title">Selena</div>
									</div>
								</figcaption>
							</figure>
						</a>
					</div>
					<div className="col-portfolio col-sm-6 col-lg-4">
						<a
							href="http://paul-themes.com/html/selena/demo/index2.html"
							title="Stationery Design"
						>
							<figure className="showcase-item">
								<div className="showcase-item-thumbnail">
									<img alt="" src="img/demo2.jpg" />
								</div>
								<figcaption className="showcase-item-hover">
									<div className="showcase-item-info">
										<div className="showcase-item-title">David</div>
									</div>
								</figcaption>
							</figure>
						</a>
					</div>
					<div className="col-portfolio col-sm-6 col-lg-4">
						<a
							href="http://paul-themes.com/html/selena/demo/index3.html"
							title="Stationery Design"
						>
							<figure className="showcase-item">
								<div className="showcase-item-thumbnail">
									<img alt="" src="img/demo3.jpg" />
								</div>
								<figcaption className="showcase-item-hover">
									<div className="showcase-item-info">
										<div className="showcase-item-title">Paul</div>
									</div>
								</figcaption>
							</figure>
						</a>
					</div>
				</div>
			</section>

			<section className="section">
				<div className="container">
					<div className="row">
						<header className="text-center col-lg-8 col-lg-offset-2">
							<h2 className="section-title">Buy now</h2>
							<p>
								Change the look of clients on your site with Selena. Impressive
								and attractive more. With fully powerful features for portfolio
								theme, Sekena really a perfect choie for you to showcase best
								your work to clients
							</p>
							<a
								target="_blank"
								href="https://themeforest.net/item/selena-minimal-portfolio-personal-template/19769118?ref=murren20"
								className="btn btn-dark"
							>
								Purchase
							</a>
						</header>
					</div>
				</div>
			</section>
		</div>
	);
}
