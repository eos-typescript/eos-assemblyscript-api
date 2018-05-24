abstract class Contract  {
        protected account_name _self;

        constructor ( name : account_name){
                _self = name;
        }

        private getSelf() : account_name {
                return _self;
	}
}
