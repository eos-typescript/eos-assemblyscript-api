abstract class Contract  {
        protected _self: account_name;

        constructor (name: account_name){
                this._self = name;
        }

        private getSelf(): account_name {
                return this._self;
	}
}
