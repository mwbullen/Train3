using UnityEngine;
using System.Collections;

public class Train : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	GameObject GetLeadCar() {
		return transform.parent.GetChild (0).gameObject;
	}

	float GetLeadCarSpeed() {
		GameObject g = GetLeadCar ();

		//return (float)g.GetComponent<WaypointMover>().movementSpeed;

		return 0f;
		//float x = g.GetComponent (WaypointMover);
	}
}
