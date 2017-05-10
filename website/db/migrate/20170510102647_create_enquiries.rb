class CreateEnquiries < ActiveRecord::Migration[5.0]
  def change
    create_table :enquiries do |t|
      t.string :email
      t.text :message

      t.timestamps
    end
  end
end
