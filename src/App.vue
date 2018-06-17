<template>
  <div id="App">
    <div class="navBar row">
			<div class="navBar__pic col-md-3">
				<img src="./assets/logo.svg" alt="">
			</div>
			<div class="navBar__searchBar col-md-9">
				<input type="text" class="navBar__searchBar-content" placeholder="Explore your own activities" >
			</div>
		</div>
		<div class="filterContent row">
			<div class="col-md-3">
				<div class="container">
					<div class="filterOption col-md-12">
						<div class="filterOption__detail">
							<div class="filterOption__detail-title">Location</div>
							<select class="filterOption__detail-select w100">
								<option>Taiwan</option>
								<option>Japan</option>
								<option>Korea</option>
							</select>
						</div>
						<div class="filterOption__detail">
							<div class="filterOption__detail-title">Date</div>
							<div class="row">
								<div class="col-md-2">from</div>
								<div class="col-md-10">
									<div class="block">
										<el-date-picker
											v-model="startTime"
											type="date"
											placeholder="start time"
											format="yyyy 年 MM 月 dd 日">
										</el-date-picker>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-2">to</div>
								<div class="col-md-10">
									<div class="block">
										<el-date-picker
											v-model="endTime"
											type="date"
											placeholder="end time"
											format="yyyy 年 MM 月 dd 日">
										</el-date-picker>
									</div>
								</div>
							</div>
						</div>
						<div class="filterOption__detail">
							<div class="filterOption__detail-title">Categories</div>
							<div class="filterOption__detail-checkBox">
								<input class="conditions" type="checkbox">All
								<input type="checkbox">Entertainment
								<input type="checkbox">Food
								<input type="checkbox">Learning
								<input type="checkbox">Outdoors
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-9">
				<div class="conditionsList mT20">
					<div class="conditionsList-text">
						Showing <span class="showConditions-number">15</span> results by...
					</div>
					<div class="showConditions">
						<span class="showConditions-condition">Koahsiung <i class="far fa-times-circle"></i></span>
						<span class="showConditions-condition">Entertainment <i class="far fa-times-circle"></i></span>
					</div>
				</div>
				<div v-for="a in 5" class="showResult">
					<div class="showResult__card">
						<div class="row showResult__card-shadow">
							<div class="col-md-3 pL0 pR0">
								<img class="w100 showResult__card-img" src="https://images.unsplash.com/photo-1521022125878-aa8a4ea78a5d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4205133f5a0cb14492ebbbabf5e16dea&auto=format&fit=crop&w=600&q=60">
							</div>
							<div class="col-md-9 showResult__card-content pL0 pR0">
								<div class="showResult__card-detail">
									<div class="showResult__card-introduction">
										<h2>hello world</h2>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
										<span class="showResult__card-aut">Ethan Foster</span>
										<span class="showResult__card-contition">Entertainment</span>
									</div>
									<div class="showResult__card-location pT10">
										<span><i class="fas fa-map-marker-alt"></i><span class="showResult__card-locText pL10">Taipei city</span></span>
										<span><i class="far fa-calendar-alt"></i><span class="showResult__card-locText pL10">2018/06/07-2018/06/17</span></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			startTime: '',
			endTime: '',
		};
	}
};
</script>


<style lang="scss">
@import "./style/main.scss";
</style>
