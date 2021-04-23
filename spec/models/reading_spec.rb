require 'rails_helper'

RSpec.describe Reading, type: :model do
  let!(:user) { create(:user) }
  let!(:readings) { create_list(:reading, 1, user_id: user.id) }
  let(:user_id) { user.id }
  let(:id) { readings.first.id }

  it { should belong_to(:user) }
  it { should validate_presence_of(:html) }
  it { should validate_presence_of(:css) }
  it { should validate_presence_of(:ruby) }
  it { should validate_presence_of(:rubyonrails) }
  it { should validate_presence_of(:javascript) }
  it { should validate_presence_of(:react) }
  it { should validate_presence_of(:available) }
  it { should validate_presence_of(:left) }
end
