import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  Lock, 
  ShieldCheck, 
  Image as ImageIcon,
  CheckCircle,
  XCircle,
  Percent,
  Save,
  List as ListIcon
} from 'lucide-react';

const EditMember = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-enter max-w-7xl mx-auto space-y-8">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-text-main tracking-tight">Edit Member Information</h2>
      </div>

      <div className="bg-panel border border-border-custom rounded-2xl p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-12">
          
          {/* Row 1 */}
          <div className="space-y-4">
            <label className="text-sm font-bold text-text-main flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Member ID
            </label>
            <input 
              type="text" 
              defaultValue="qodwm0236@gmail.com"
              readOnly
              className="w-full bg-inputBg/50 border border-border-custom text-text-muted rounded-xl px-5 py-4 text-sm font-bold cursor-not-allowed"
            />
          </div>

          <div className="space-y-4">
            <label className="text-sm font-bold text-text-main flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Member Password
            </label>
            <input 
              type="password" 
              placeholder="Enter new password"
              className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-5 py-4 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <p className="text-xs text-danger font-medium mt-1.5">When you enter the password, it is set as a new password</p>
          </div>

          <div className="space-y-4">
            <label className="text-sm font-bold text-text-main flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Avatar
            </label>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-inputBg border border-border-custom flex items-center justify-center overflow-hidden shrink-0">
                <User size={28} className="text-text-muted" />
              </div>
              <div className="flex-1 flex gap-3">
                <div className="flex-1 bg-inputBg/50 border border-border-custom rounded-xl px-5 py-3 text-xs text-text-muted flex items-center">
                  Default profile <span className="ml-1 text-text-main font-bold">Avatar</span>
                </div>
                <button className="px-5 py-3 bg-panel border border-primary/30 text-primary rounded-xl text-sm font-bold hover:bg-primary/5 transition-all">
                  Change
                </button>
              </div>
            </div>
            <p className="text-xs text-danger font-medium mt-1.5">Click the Save button to apply</p>
          </div>

          {/* Row 2 */}
          <div className="space-y-4">
            <label className="text-sm font-bold text-text-main flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Member Security Password <span className="text-danger opacity-70">(8 digits)</span>
            </label>
            <input 
              type="password" 
              placeholder="Enter new security code"
              className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-5 py-4 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <p className="text-xs text-danger font-medium mt-1.5">When you enter the secure code, it is set as a new secure code.</p>
          </div>

          <div className="space-y-4">
            <label className="text-sm font-bold text-text-main flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Membership Status
            </label>
            <div className="flex items-center gap-10 h-14">
              <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="radio" name="membership-status" defaultChecked className="hidden peer" />
                  <div className="w-5 h-5 rounded-full border-2 border-border-custom peer-checked:border-primary peer-checked:bg-primary transition-all flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-sm font-bold text-text-main transition-colors">Active</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="radio" name="membership-status" className="hidden peer" />
                  <div className="w-5 h-5 rounded-full border-2 border-border-custom peer-checked:border-border-custom peer-checked:bg-border-custom transition-all flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-sm text-text-secondary group-hover:text-text-main transition-colors">Inactive</span>
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-sm font-bold text-text-main flex items-center gap-2 whitespace-nowrap">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Member External Withdrawal Status
            </label>
            <div className="flex items-center gap-10 h-14">
              <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="radio" name="external-withdrawal" defaultChecked className="hidden peer" />
                  <div className="w-5 h-5 rounded-full border-2 border-border-custom peer-checked:border-primary peer-checked:bg-primary transition-all flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-sm font-bold text-text-main transition-colors">Possible</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="radio" name="external-withdrawal" className="hidden peer" />
                  <div className="w-5 h-5 rounded-full border-2 border-border-custom peer-checked:border-border-custom peer-checked:bg-border-custom transition-all flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-sm text-text-secondary group-hover:text-text-main transition-colors">Impossible</span>
              </label>
            </div>
          </div>

          {/* Row 3 */}
          <div className="space-y-4">
            <label className="text-sm font-bold text-text-main flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> User Rate
            </label>
            <select className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer">
              <option value="">Select rate</option>
              <option value="1">Rate 1</option>
              <option value="2">Rate 2</option>
            </select>
          </div>

          <div className="space-y-4 lg:col-start-3">
            <label className="text-sm font-bold text-text-main flex items-center gap-2 whitespace-nowrap">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Member Internal Withdrawal Status
            </label>
            <div className="flex items-center gap-10 h-14">
              <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="radio" name="internal-withdrawal" defaultChecked className="hidden peer" />
                  <div className="w-5 h-5 rounded-full border-2 border-border-custom peer-checked:border-primary peer-checked:bg-primary transition-all flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-sm font-bold text-text-main transition-colors">Possible</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="radio" name="internal-withdrawal" className="hidden peer" />
                  <div className="w-5 h-5 rounded-full border-2 border-border-custom peer-checked:border-border-custom peer-checked:bg-border-custom transition-all flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-sm text-text-secondary group-hover:text-text-main transition-colors">Impossible</span>
              </label>
            </div>
          </div>

        </div>

        <div className="mt-14 flex gap-4">
          <button className="px-10 py-4 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all">
            Save
          </button>
          <button 
            onClick={() => navigate('/members')}
            className="px-10 py-4 bg-panel border border-border-custom text-text-secondary rounded-xl text-sm font-bold hover:bg-panel-hover transition-all"
          >
            List
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditMember;
