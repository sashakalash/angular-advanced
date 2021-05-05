import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})

export class CoordSendingService {
	pushData(data: string) {
		console.log(data);
	}
}