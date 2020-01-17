import React from 'react'
// import PropTypes from 'prop-types'

import './style.scss'
import BlackArrowIcon from './assets/img/arrow-black.png'
import CalendarIcon from './assets/img/calendar.png'

const TravelSummary = () => (
  <div class="list-hero" id="results">
		<div class="container">
			<div class="list-hero__up">
				<div class="list-hero__up-item">
					<div class="list-hero__up-date">
						<span>Departure</span>
						<img src={CalendarIcon} alt='' />
						<span>20/12/2019</span>
					</div>
					<div class="list-hero__up-locations">
						<span>Split</span>
						<img src={BlackArrowIcon} alt='' />
						<span>Hvar</span>
					</div>
				</div>

				<div class="list-hero__up-item">
					<div class="list-hero__up-date">
						<span>Return</span>
						<img src={CalendarIcon} alt='' />
						<span>23/12/2019</span>
					</div>
					<div class="list-hero__up-locations">
						<span>Hvar</span>
						<img src={BlackArrowIcon} alt='' />
						<span>Split</span>
					</div>
				</div>
			</div>
			<div class="list-hero__down">
				<p>Change the departure date:</p>
				<div class="list-hero__slider">
					<div class="list-hero__slider-item">
						<span>Thursday</span>
						<p>17/12</p>
					</div>
					<div class="list-hero__slider-item">
						<span>Friday</span>
						<p>18/12</p>
					</div>
					<div class="list-hero__slider-item list-hero__slider-item--no-border">
						<span>Saturday</span>
						<p>19/12</p>
					</div>
					<div class="list-hero__slider-item list-hero__slider-item--active">
						<span>Sunday</span>
						<p>20/12</p>
					</div>
					<div class="list-hero__slider-item">
						<span>Monday</span>
						<p>21/12</p>
					</div>
					<div class="list-hero__slider-item">
						<span>Tuesday</span>
						<p>22/12</p>
					</div>
					<div class="list-hero__slider-item">
						<span>Wednesday</span>
						<p>23/12</p>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default TravelSummary
