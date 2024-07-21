import React from "react";

export default function Main() {
	return (
		<main className="main">
			<div className="container-fluid">
				<div className="opener">
					<div className="container">
						<h1>
							Awesome <i>Demo</i>
						</h1>
						<p className="lead">
							<i
								style={{
									display: "none",
									fontFamily: "Playfair Display, serif",
								}}
							>
								<strong>+ 22 inner pages</strong>
							</i>
						</p>
						<div className="col-md-10 col-lg-8 col-md-offset-1 col-lg-offset-2">
							<p>
								Selena is evaluated an unique & trendy HTML template for
								Personal, portfolio and more. With design minimal and focus on
								show projects, Selena will make your work look more impressive
								and attractive to viewers.
							</p>
							<img alt="" src="img/signature-white.png" />
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
