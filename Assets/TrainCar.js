#pragma strict

public var speedCheckInterval : float = .5f;
private var timeSinceSpeedCheck :float = 0f;

function Start () {

}

function Update () {
	timeSinceSpeedCheck += Time.deltaTime;
	
	if (timeSinceSpeedCheck >= speedCheckInterval && !IsFirstCar) {
		SyncSpeedtoFirstCar();
	}
}

function GetLeadCarSpeed() {
	var parentT : Transform =  transform.parent.GetChild(0);
	
	var wpm =  parentT.gameObject.GetComponent(WaypointMover);
	
	return wpm.movementSpeed;
}

function SyncSpeedtoFirstCar() {
	var wpm = GetComponent(WaypointMover);
	
	wpm.movementSpeed = GetLeadCarSpeed();	
	
}

function IsFirstCar() {
	var parentT : GameObject =  transform.parent.GetChild(0).gameObject;

	return (parentT == gameObject);
}